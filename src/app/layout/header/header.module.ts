import { NgModule } from '@angular/core';
import { HeaderComponent } from 'app/layout/header/header.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
