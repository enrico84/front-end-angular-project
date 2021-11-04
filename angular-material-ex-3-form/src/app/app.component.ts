import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html'
  template: `
  <form #f="ngForm" (ngSubmit)="save(f)">
    <mat-form-field appearance="fill">
      <mat-label>Input</mat-label>
      <input matInput [ngModel] name="username">
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Select</mat-label>
      <mat-select [ngModel] name="category">
        <mat-option value="admin">Admin</mat-option>
        <mat-option value="guest">Guest</mat-option>
      </mat-select>
    </mat-form-field>
    
    <mat-form-field appearance="fill">
      <mat-label>Textarea</mat-label>
      <textarea matInput [ngModel] name="bio"></textarea>
    </mat-form-field>

    <mat-radio-group [ngModel] name="gender">
      <mat-radio-button value="m"> Male </mat-radio-button>
      <mat-radio-button value="f"> Female </mat-radio-button>
    </mat-radio-group>

    <mat-checkbox [ngModel] name="subscription">Subscribe newsletter</mat-checkbox>

    <mat-form-field appearance="fill">
      <mat-label>Choose a date</mat-label>
      <input matInput [ngModel] name="birthday" [matDatepicker]="picker" [max]="today">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <!--  [matDatepickerFilter]="myFilter" -->

    <button mat-raised-button color="primary" type="submit">Save</button>

  </form>

  
  `,
  styles: [`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  `]
})
export class AppComponent {

  today = new Date(); // FILTRO PER SELEZIONARE LE DATE MINORI A QUELLE DI OGGI

  /* 
  // MODO ALTERNATIVO PER FILTRARE SOLO DATE MINORI AD OGGI 
  myFilter(date: Date | null): boolean {
    const today = new Date().getTime();
    return date ? today > date.getTime() : false;

    // Previene da essere selezionati i Sabati e Domeniche.
    // const day = (d || new Date()).getDay();
    // return day !== 0 && day !== 6;
  }
  */

  save(form: NgForm) : void {
    console.log(form.value);
  }

}
