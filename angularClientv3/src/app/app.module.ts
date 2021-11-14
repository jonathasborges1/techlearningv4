import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './login/auth/basicauth.service';

import { AppComponent } from './app.component';
import {AppRoutingModule, routesList} from "./app-routing.module";
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { HelloComponent } from './hello/hello.component';
import { AgendarComponent } from './agendar/agendar.component';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    routesList,
    UsuarioCreateComponent,
    HelloComponent,
    AgendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule, MatInputModule, MatIconModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatDividerModule, MatGridListModule, MatRippleModule,
    MatInputModule, MatSelectModule, MatSnackBarModule,
    MatDialogModule, MatProgressSpinnerModule, MatDatepickerModule,
    MatCardModule
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
