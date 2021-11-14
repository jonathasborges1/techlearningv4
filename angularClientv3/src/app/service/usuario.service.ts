import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api/v1/usuarios"
  private baseURL2  = "http://localhost:8080/api/v1/usuarios/login"
  constructor(private httpClient: HttpClient) {}

  buscaListaUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  cadastraNovoUsuario(newUser: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,newUser);
  }

  async login(usuario: any) {
    console.log(`0 - Flag - usuario.service : ${usuario.email}`);
    //const result =  await this.httpClient.post<any>(`${this.baseURL2}`, "pedro").toPromise();
    const result =  await this.httpClient.get<any>(`${this.baseURL2}/${usuario.email}`).toPromise();
    console.log(`1 - Flag - usuario.service : ${result}`);
    console.log(`2 - Flag - usuario.service : ${result.access_token}`);
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      console.log(`3 - Flag - usuario.service, entrou no if : ${result}`);
      return true;
    }
    console.log(`4 - Flag - usuario.service : ${result}`);
    return false;
  }

}

