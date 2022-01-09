import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language',
  templateUrl: './languages.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'app-language'

})
export class LanguagesComponent implements OnInit, OnDestroy
{
  availableLangs: AvailableLangs;
  activeLanguage: string;
  flagCodes: any;
  flagLabels: any;
  /**
   * Constructor
   */
  constructor(
    private _translocoService: TranslocoService
  ) {
    this.availableLangs = this._translocoService.getAvailableLangs();
    // console.log('availableLangs', this.availableLangs);
   }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this._translocoService.langChanges$.subscribe((activeLang) => {
      this.activeLanguage = activeLang;
    });

    this.flagCodes = {
      'en': 'us',
      'es': 'es'
    };

    this.flagLabels = {
      'en': 'English',
      'es': 'Español'
    };

  }

  ngOnDestroy(): void
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  setActiveLanguage(lang: string): void {
    this._translocoService.setActiveLang(lang);

  }

  trackByFn(index: number, item: any): void {
    return item.id || index;
  }
}
