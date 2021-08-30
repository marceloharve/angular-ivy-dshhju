import { Injectable, OnInit } from '@angular/core';
import * as data from './_files/analytics.json';
import { Modulo } from './modulo';

@Injectable({providedIn: 'root'})
export class DadosAulaService  implements OnInit {
  _analytics: Modulo = (data as any).default;
  constructor() { 
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
      return item.video;
    }
    else
    {
      return "";
    }
  }

}