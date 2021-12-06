import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);


  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _renderer2: Renderer2,
    private _router: Router
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnChanges(changes: SimpleChanges): void
  {

  }

  ngOnInit(): void {    
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  refresh(): void 
  {
    // Mark for check
    this._changeDetectorRef.markForCheck();

    // Execute the observable
    this.onRefreshed.next(true);

    // Update Navigation (TODO: Por evaluar)
  }

}
