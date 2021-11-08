import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './login/auth/basicauth.service';

import { AppComponent } from './app.component';
import {AppRoutingModule, routesList} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    routesList,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
