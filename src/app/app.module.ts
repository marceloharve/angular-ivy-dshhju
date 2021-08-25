import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Aula1Component } from './aula1/aula1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot([
    {path: 'aula1', component: Aula1Component},
  ]), ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
