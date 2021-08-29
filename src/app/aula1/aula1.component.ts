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
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
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

}