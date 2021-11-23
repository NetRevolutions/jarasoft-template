import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [
  
  // Redirect empty path to '/example'
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // Redirect signed in user to the '/example'
  //
  // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

  // Auth routes for guests

  // Auth routes for authenticated users

  // Landing routes
  {
    path: '',
    component: LayoutComponent,    
    // data: {
    //   layout: 'empty'
    // },
    children: [
      {path: 'home', loadChildren: () => import('./modules/landing/home/home.module').then(m => m.LandingHomeModule)}
    ]
  }
];
