import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
