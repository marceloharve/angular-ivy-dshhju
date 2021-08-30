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
    this.aulaatual = dados.getAulaAtual();
    this.revisaoatual = dados.getRevisaoAtual();
    this.videoatual = dados.getVideoAtual();
    this.perguntaatual = dados.getPerguntaAtual();
    this.respostaCorreta = dados.getAtual().desafio.respostacerta;
    this.respostas = dados.getAtual().desafio.respostas;
    this.setup = dados.hasSetup();
    this.textosetup = dados.getAtual().desafio.setup;
  }

  ngOnInit() {}

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
