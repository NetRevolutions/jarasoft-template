import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlanBillingComponent } from './plan-billing/plan-billing.component';
import { SecurityComponent } from './security/security.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    AccountComponent,
    NotificationsComponent,
    PlanBillingComponent,
    SecurityComponent,
    TeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
