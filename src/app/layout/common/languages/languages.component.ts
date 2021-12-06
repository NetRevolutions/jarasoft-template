import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'app-languages'
})
export class LanguagesComponent implements OnInit, OnDestroy {

  availableLangs!: AvailableLangs;
  activeLang!: string;
  flagCodes: any;

  /**
   * Constructor
   */
  constructor(
    private _translocoService: TranslocoService
  ) { }

  /**
   * On init
   */

  ngOnInit(): void {
    // Get the available languages from transloco
    this.availableLangs = this._translocoService.getAvailableLangs();

    // Subscribe to language changes
    this._translocoService.langChanges$.subscribe((activeLang) => {

      // Get tha active lang
      this.activeLang = activeLang;

      // Update the navigation (TODO: Por evaluar)
      this._updateNavigation(activeLang);
    });

    // Set the country iso codes for languages for flags
    this.flagCodes = {
      'en': 'us',
      //'tr': 'tr',
      'es': 'es'
    };
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * 
   * @param lang Set the active lang
   */
  setActiveLang(lang: string): void {
    // Set the active lang
    this._translocoService.setActiveLang(lang);
  }

  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  private _updateNavigation(lang: string): void {
    // TODO: Pending implement
  }

}
