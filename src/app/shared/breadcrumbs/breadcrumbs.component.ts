import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {  
  public title!: string;
  public processData$!: Subscription;

  constructor(private _router: Router) {
    this.processData$ = this.processData()
      .subscribe(data => {
        this.title = data['title']; // TODO: Mejorar para que valide antes.
        //console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.processData$.unsubscribe();
  }

  //----------------------------------------------------------------------------------
  // Private Methods
  //----------------------------------------------------------------------------------
  private processData() {
    return this._router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
}
