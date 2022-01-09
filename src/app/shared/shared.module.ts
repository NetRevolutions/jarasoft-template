import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { DropdownMenuComponent } from '../components/dropdown/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule {
}
