import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.css']
})
export class Aula1Component implements OnInit {
  divvideo = true;
  divrevisao = false;
  divdesafio = false;
  divrespotacorreta = false;
  classeresposta = "respostaerrada"
  setup = false;
  respostaCorreta = 0;
  respostausuario = "";
  respostas: string[] = ['Através do Coockie de cada navegador', 'Através do Dispositivo', 'Através do E-mail logado', 'Através do Navegador'];
  constructor() { }

  ngOnInit() {
  }

  videoclick()
  {
    this.divdesafio = false;
    this.divrevisao = false;
    this.divvideo = true;
  }

  revisaoclick()
  {
    this.divdesafio = false;
    this.divrevisao = true;
    this.divvideo = false;
  }
  
  desafioclick()
  {
    this.divdesafio = true;
    this.divrevisao = false;
    this.divvideo = false;
  }  

  radioChange(event)
  {
    this.divrespotacorreta = true;
    if(event.value == this.respostas[this.respostaCorreta] )
    {
      this.classeresposta = "respostacerta";
    }
    else
    {
      this.classeresposta = "respostaerrada";
    }
  }

}