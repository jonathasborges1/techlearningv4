import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Agendar} from "../model/agendar";

import { AgendarService } from "../service/agendar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  schedule: any = {
    discipline: '',
    starts: '',
    finishes: '',
    day: ''
  };
  days = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta'
  ];
  checkAction = 1;
  titleToolbar = 'Horário > Adicionar';
  disciplinesList: any = [];
  // @ts-ignore
  message;

  constructor(private agendarService: AgendarService, private route: Router) {  }

  ngOnInit(): void {
  }

  // Função de cadastro de disciplina ao horário
  createSchedule() {
    if(this.schedule.discipline == '' || this.schedule.starts == ''
      || this.schedule.finishes == '' || this.schedule.day == ''){
      this.message("Preencha os campos marcados com asterisco!");
      return;
    }
    this.agendarService.createSchedule(this.schedule).subscribe(
      success => {
        this.message("Adicionado ao horário!");
        this.prepareToAddSchedule();
      },
      error => {
        this.message("Erro ao adicionar.");
        console.log(error);
      }
    );
  }

  // Função que configura as propriedades de schedule para vazias
  prepareToAddSchedule() {
    this.schedule = {
      discipline: '',
      starts: '',
      finishes: ''
    };
    this.titleToolbar = "Horário > Adicionar";
    this.checkAction = 1;
  }
}
function ngOnInit() {
    throw new Error('Function not implemented.');
}

function createSchedule() {
    throw new Error('Function not implemented.');
}

