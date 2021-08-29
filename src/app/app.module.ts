import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Aula1Component } from './aula1/aula1.component';
import { Aula1RevisaoComponent } from './aula1-revisao/aula1-revisao.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports:      [  MatCardModule,MatRadioModule,MatButtonModule,MatToolbarModule, MatProgressBarModule, MatIconModule,BrowserModule, FormsModule,  RouterModule.forRoot([
    {path: 'aula1', component: Aula1Component},
    {path: 'aula1-revisao', component: Aula1RevisaoComponent},
  ]), ],
  declarations: [ AppComponent, HelloComponent,Aula1Component,Aula1RevisaoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
