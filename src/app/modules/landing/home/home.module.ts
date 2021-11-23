import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { landingHomeRoutes } from './home.routing';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    RouterModule.forChild(landingHomeRoutes),
    SharedModule
  ]
})
export class LandingHomeModule { }
