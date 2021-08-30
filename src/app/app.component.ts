import { Component, VERSION } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Modulo } from './modulo';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;



  constructor()
  {

  }
}
