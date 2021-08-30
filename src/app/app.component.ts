import { Component, Inject, VERSION } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
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
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  constructor(public dialog: MatDialog)
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}