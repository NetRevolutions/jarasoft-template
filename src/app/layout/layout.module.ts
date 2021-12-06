import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { BreadcrumbsComponent } from './layouts/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SettingsSidebarComponent } from './layouts/settings-sidebar/settings-sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SettingsSidebarComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SettingsSidebarComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
