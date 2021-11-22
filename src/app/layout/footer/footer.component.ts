import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnDestroy 
{
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * On destroy
   */
  ngOnDestroy(): void 
  {
    // Unsubscribe for all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
