import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MenuComponent} from "./menu/menu.component";
import {HelloComponent} from "./hello/hello.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {UsuarioListComponent} from "./usuario-list/usuario-list.component";
import {UsuarioCreateComponent} from "./usuario-create/usuario-create.component";
import {AgendarComponent} from "./agendar/agendar.component";
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listarusuarios', component: UsuarioListComponent},
  {path: 'criarusuario', component: UsuarioCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesList = [MenuComponent,LoginComponent,MenuComponent,LogoutComponent,UsuarioListComponent];
