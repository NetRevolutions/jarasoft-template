import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsSidebarComponent } from './settings-sidebar.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    SettingsSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SettingsSidebarComponent
  ]
})
export class SettingsSidebarModule { }
