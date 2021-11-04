import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ContactsComponent],
  // "CommonModule" E'UN SOSTITUTO DI "BrowserModule" IMPORTATO IN "app-module.ts" MA SENZA LE FUNZIONALITA' DI BOOTSTRAP,
  // E FORNISCE FUNZIONALITA' COME "*ngIf, *ngFor, ecc" AI COMPONENTS DI QUESTO MODULO (ContactsComponent)
  imports: [
    CommonModule,
    SharedModule,

     // LAZY LOADING - VIENE CARICATO IL COMPONENTE "ContactsComponent" QUANDO CI SI TROVA al path 'http://localhost:4200/contacts/'
    RouterModule.forChild([
      {path: '', component: ContactsComponent}
    ])
  ]
})
export class ContactsModule { }
