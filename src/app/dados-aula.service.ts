import { Injectable, OnInit } from '@angular/core';
import * as data from './_files/analytics.json';
import { Modulo } from './modulo';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class DadosAulaService  implements OnInit {
[x: string]: any;
  _analytics: Modulo = (data as any).default;
  constructor(private sanitizer: DomSanitizer) { 
    this._analytics.atual = true;
    this._analytics.aulas[0].checked = true;  

  }

  ngOnInit() {
   
  }

  getRevisaoAtual()
  {
    let item = this._analytics.aulas.find(p => p.checked == true);

    if (item != null)
    {
      console.log(item.revisao);
      return item.revisao;
    }
    else
    {
      return "";
    }
  }


  getAulaAtual()
  {
    let item = this._analytics.aulas.find(p => p.checked == true);

    if (item != null)
    {
      console.log(item.nome)
      return item.nome;
    }
    else
    {
      return "";
    }
  }

  getVideoAtual()
  {
    let item = this._analytics.aulas.find(p => p.checked == true);

    if (item != null)
    {
      console.log(item.video);
      return this.sanitizer.bypassSecurityTrustResourceUrl(item.video);
    }
    else
    {
      return "";
    }
  }

  getPerguntaAtual()
  {
    let item = this._analytics.aulas.find(p => p.checked == true);

    if (item != null)
    {
      return item.desafio.pergunta;
    }
    else
    {
      return "";
    }
  }

  getAtual()
  {
    return  this._analytics.aulas.find(p => p.checked == true);


  }

  hasSetup()
  {
    let _aulaAtual = this.getAtual();
    if (_aulaAtual.desafio.setup == "")
    {
      return false;
    }
    else
    {
      return true;
    }

  }

}