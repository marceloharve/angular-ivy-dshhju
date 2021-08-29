import { Component, VERSION } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Modulo } from './modulo';
import * as data from './_files/analytics.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  _analytics: Modulo = (data as any).default;
  constructor()
  {
    console.log(this._analytics.nome );
  }
}
