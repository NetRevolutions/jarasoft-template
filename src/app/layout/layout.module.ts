import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Components
import { LayoutComponent } from './layout.component';
import { BreadcrumbsComponent } from './layouts/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SettingsSidebarComponent } from './layouts/settings-sidebar/settings-sidebar.component';
import { LanguagesModule } from './common/languages/languages.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SettingsSidebarComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    LanguagesModule
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
