import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from '../shared/shared.module';

const layoutModules = [
  FooterModule,
  HeaderModule,
  NavbarModule,
  SidebarModule
];

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
