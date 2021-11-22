import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecurrenceComponent } from './recurrence/recurrence.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [    
  
    RecurrenceComponent, SettingsComponent, SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
