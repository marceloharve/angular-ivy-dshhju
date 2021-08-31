import { Component, Inject, VERSION } from '@angular/core';
import { DadosAulaService } from './dados-aula.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Aula } from './aula';

export interface DialogData {
  dados: DadosAulaService;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  animal: string;


  openDialog(): void {
    const dialogRef = this.dialog.open(Menu, {
      width: '400px',height:'400px',
      data: {dados: this.dados}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  constructor(public dialog: MatDialog,public dados : DadosAulaService)
  {

  }
}

@Component({
  selector: 'menu',
  templateUrl: 'menu.html',
})
export class Menu {

  constructor(
    public dialogRef: MatDialogRef<Menu>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}