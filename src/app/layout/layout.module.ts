import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './core/navbar/navbar.module';
import { FooterModule } from './core/footer/footer.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsSidebarModule } from './core/settings-sidebar/settings-sidebar.module';
import { BreadcrumbsModule } from './core/breadcrumbs/breadcrumbs.module';

const layoutModules = [  
  BreadcrumbsModule,
  FooterModule,
  NavbarModule,
  SidebarModule,
  SettingsSidebarModule
]

@NgModule({
  declarations: [
    LayoutComponent    
  ],
  imports: [
    SharedModule,
    ...layoutModules

  ],
  exports: [
    LayoutComponent,
    ...layoutModules
  ]
})
export class LayoutModule { }
