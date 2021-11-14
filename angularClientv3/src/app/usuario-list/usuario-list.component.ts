import { Component, OnInit } from '@angular/core';
import {Usuario} from "../model/usuario";
import {UsuarioService} from "../service/usuario.service";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  listaDeUsuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.buscaUsuarios();
/*
    this.listaDeUsuarios = [{
          "id": 1,
          "nome": "joao",
          "email": "joao@gmail.com",
          "senha": "123",
          "especialidade": "FISICA"
        },
      {
        "id": 2,
        "nome": "pedro",
        "email": "pedro@gmail.com",
        "senha": "321",
        "especialidade": "MATEMATICA"
      }];
 */
    }

    private buscaUsuarios(){
      this.usuarioService.buscaListaUsuarios().subscribe(data => {
        console.log(data);
        this.listaDeUsuarios = data;
      });
    }
}

