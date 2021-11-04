import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../model/user';


@Component({
    selector: 'dialog-delete',
    template: `
        <div mat-dialog-content>
          <p>Delete {{user.name}}, are you sure ?</p>
        </div>
        <div mat-dialog-actions>
          <button mat-button mat-dialog-close>No Thanks</button>
          <button mat-button [mat-dialog-close]="user.id" cdkFocusInitial>Ok</button>
        </div>
    `,
  })
  export class DialogDeleteComponent {
  
    constructor(
      public dialogRef: MatDialogRef<DialogDeleteComponent>,
      @Inject(MAT_DIALOG_DATA) public user: User) {
        console.log("User passato: ", user);
      }
  
  }