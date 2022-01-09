import { NgModule } from '@angular/core';
import { LanguagesComponent } from './languages.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownMenuComponent } from '../../../components/dropdown/dropdown-menu/dropdown-menu.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';



@NgModule({
  declarations: [
    LanguagesComponent,
    DropdownComponent,
    DropdownMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LanguagesComponent
  ]
})
export class LanguagesModule { }
