import { Injectable, OnInit } from '@angular/core';
import * as data from './_files/analytics.json';
import { Modulo } from './modulo';

@Injectable()
export class DadosAulaService  implements OnInit {
  _analytics: Modulo = (data as any).default;
  constructor() { 

  }

  ngOnInit() {
    this._analytics.atual = true;
    this._analytics.aulas[0].checked = true;     
  }

}