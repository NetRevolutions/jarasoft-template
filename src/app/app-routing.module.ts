import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica #1' } },      
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },  

  {
    path: 'error',
    component: PagesComponent,
    children: [
      { path: 'error-404',
        data: { title: 'Error-404' },
        pathMatch: 'full', loadChildren: () => import('./pages/error/error-404/error-404.module').then(m => m.Error404Module)
      },
      { path: 'error-500',
        data: { title: 'Error-500' },
        pathMatch: 'full', loadChildren: () => import('./pages/error/error-500/error-500.module').then(m => m.Error500Module)
      },
      { path: '', redirectTo: '/error/error-404', pathMatch: 'full'}
    ]
  },  
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },     
  { path: '**', redirectTo: 'error/error-404'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
