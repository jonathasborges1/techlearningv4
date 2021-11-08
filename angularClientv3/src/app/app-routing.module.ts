import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MenuComponent} from "./menu/menu.component";
import {HelloComponent} from "./hello/hello.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesList = [MenuComponent,LoginComponent,MenuComponent,LogoutComponent];
