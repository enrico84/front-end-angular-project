import {Component, Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../model/user';


@Component({
    selector: 'dialog-user-form',
    template: `
        <div mat-dialog-content>
          <p>Edit {{user?.name}}, are you sure ?</p>
          
          <form #f="ngForm" (submit)="confirmHandler(f)">

            <mat-form-field appearance="fill">
              <mat-label>User name</mat-label>
              <input matInput 
                  [ngModel]="user?.name" 
                  name="name" 
                  required 
                  minlength="3">
              <mat-error>
                Required at least 3 characters
              </mat-error>
            </mat-form-field>
            
            <div mat-dialog-actions>
              <button mat-button mat-dialog-close>No Thanks</button>
              <button mat-button type="submit" cdkFocusInitial [disabled]="f.invalid">Confirm</button>
            </div>
          
            </form>
        </div>
        
    `,
  })
  export class DialogUserFormComponent {
  
    constructor(
      public dialogRef: MatDialogRef<DialogUserFormComponent>,
      @Inject(MAT_DIALOG_DATA) public user: User | null) {
        console.log("User passato: ", user);
      }

      /* CHIUDO LA FINESTRA DI DIALOG APERTA E SCATENA 
         L'EVENTO "upsertHandler.dialogRef.afterClosed()" DICHIARATO IN "app.component.ts" 
      */ 
      confirmHandler(f: NgForm): void{
        console.log("confirmHandler: ", f.value);
        this.dialogRef.close(f.value);
      }
  
  }