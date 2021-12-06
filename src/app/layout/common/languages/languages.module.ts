import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    LanguagesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LanguagesComponent
  ]
})
export class LanguagesModule { }
