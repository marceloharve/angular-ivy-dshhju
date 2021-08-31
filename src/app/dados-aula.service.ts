import { Injectable, OnInit } from '@angular/core';
import * as data from './_files/analytics.json';
import { Modulo } from './modulo';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class DadosAulaService implements OnInit {
  [x: string]: any;
  _analytics: Modulo = (data as any).default;
  constructor(private sanitizer: DomSanitizer) {
    this._analytics.atual = true;
    this._analytics.aulas[0].atual = true;
    this._analytics.aulas.forEach(p =>{
      p.checked = false;
    });
  }

  ngOnInit() {}

  getRevisaoAtual() {
    let item = this._analytics.aulas.find(p => p.atual == true);

    if (item != null) {

      return item.revisao;
    } else {
      return '';
    }
  }

  getAulaAtual() {
    let item = this._analytics.aulas.find(p => p.atual == true);

    if (item != null) {
      return item.nome;
    } else {
      return '';
    }
  }

  getVideoAtual() {
    let item = this._analytics.aulas.find(p => p.atual == true);

    if (item != null) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(item.video);
    } else {
      return '';
    }
  }

  getPerguntaAtual() {
    let item = this._analytics.aulas.find(p => p.atual == true);

    if (item != null) {
      return item.desafio.pergunta;
    } else {
      return '';
    }
  }

  getAtual() {
    return this._analytics.aulas.find(p => p.atual == true);
  }

  proximaAula() {
    let indice = this._analytics.aulas.findIndex(p => p.atual == true);
    if (indice + 1 <= this._analytics.aulas.length) {
      this._analytics.aulas[indice].atual = false;
      this._analytics.aulas[indice].checked = true;
      this._analytics.aulas[indice + 1].atual = true;

    }
  }

  selecionatopico(idTopicoAula)
  {
    let indice = this._analytics.aulas.findIndex(p => p.idTopicoAula == idTopicoAula );
    if (indice => 0) {
      this._analytics.aulas.forEach(t => t.atual = false);
      this._analytics.aulas[indice].atual = true;

    }    
  }

  hasSetup() {
    let _aulaAtual = this.getAtual();
    if (_aulaAtual.desafio.setup == '') {
      return false;
    } else {
      return true;
    }
  }

  quantidadevistas()
  {
    let aulascheckada = this._analytics.aulas.filter(p => p.checked == true).length;
    return  (aulascheckada/this._analytics.aulas.length)*100;
  }
}
