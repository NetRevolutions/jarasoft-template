import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { Route, RouterModule } from '@angular/router';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: ExampleComponent
  }
];

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes)
  ]
})
export class ExampleModule { }
