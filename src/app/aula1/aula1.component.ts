import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DadosAulaService } from '../dados-aula.service';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.css']
})
export class Aula1Component implements OnInit {
  divvideo = true;
  aulaatual = "";
  revisaoatual = "";
  videoatual : SafeResourceUrl;
  perguntaatual = ""
  divrevisao = false;
  divdesafio = false;
  divrespotacorreta = false;
  classeresposta = 'respostaerrada';
  setup = false;
  respostaCorreta = 0;
  respostausuario = '';
  respostas: string[];
  textosetup = "";

  constructor(public dados : DadosAulaService) {
    this.imprimiraula();

  }

  ngOnInit() {}

  imprimiraula()
  {
    this.aulaatual = this.dados.getAulaAtual();
    this.revisaoatual = this.dados.getRevisaoAtual();
    this.videoatual = this.dados.getVideoAtual();
    this.perguntaatual = this.dados.getPerguntaAtual();
    this.respostaCorreta = this.dados.getAtual().desafio.respostacerta;
    this.respostas = this.dados.getAtual().desafio.respostas;
    this.setup = this.dados.hasSetup();
    this.textosetup = this.dados.getAtual().desafio.setup;
  }

  videoclick() {
    this.divdesafio = false;
    this.divrevisao = false;
    this.divvideo = true;
  }

  revisaoclick() {
    this.divdesafio = false;
    this.divrevisao = true;
    this.divvideo = false;
  }

  desafioclick() {
    this.divdesafio = true;
    this.divrevisao = false;
    this.divvideo = false;
  }

  continuar()
  {
    if(this.divvideo){
      this.revisaoclick();
    }
    else
    {
      if(this.divrevisao){
        this.desafioclick();
      }
      else
      {
        this.dados.proximaAula(); 
        this.videoclick(); 
        this.imprimiraula();
      }
    }
  }

  radioChange(event) {
    this.divrespotacorreta = true;
    if (event.value == this.respostas[this.respostaCorreta]) {
      this.classeresposta = 'respostacerta';
    } else {
      this.classeresposta = 'respostaerrada';
    }
  }
}
