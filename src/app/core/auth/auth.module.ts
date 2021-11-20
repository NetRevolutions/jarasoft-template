import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  imports  : [
    HttpClientModule
  ],
  providers: [
      AuthService,
      {
          provide : HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi   : true
      }
  ]
})
export class AuthModule { }
