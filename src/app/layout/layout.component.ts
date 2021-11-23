import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy 
{
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor   
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {

    // Subscribe to NavigationEnd event
    // this._router.events.pipe(
    //   filter(event=> event instanceof NavigationEnd),
    //   takeUntil(this._unsubscribeAll)
    // ).subscribe(() => {
    //   // Update the layout
    //   this._updateLayout();
    // })
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------



  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  
  /**
   * Update the selected layout
   */
  private _updateLayout(): void
  {
    // Get the current activated route
    // let route = this._activatedRoute;
    // while ( route.firstChild )
    // {
    //     route = route.firstChild;
    // }
  }

}
