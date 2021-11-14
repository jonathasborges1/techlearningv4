import { Component, OnInit } from '@angular/core';
import {Usuario} from "../model/usuario";
import {UsuarioService} from "../service/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  newUsuario: Usuario = new Usuario();
  cadastraUsuario(){
    this.usuarioService.cadastraNovoUsuario(this.newUsuario).subscribe(data =>{
      console.log(data);
      this.vaiParaListaUsuario();
    },
      error => console.log(error));
  }
  vaiParaListaUsuario(){
    this.router.navigate(['/usuarios'])
  }
  onSubmit(){
    console.log(this.newUsuario);
    this.cadastraUsuario();
  }
}
