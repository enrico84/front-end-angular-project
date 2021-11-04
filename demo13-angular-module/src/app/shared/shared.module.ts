import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [AlertComponent],

  // PER ESSERE UTILIZZABILE ALL'ESTERNO, "AlertComponent" VA ESPORTATA
  exports: [AlertComponent],

  // "CommonModule" E'UN SOSTITUTO DI "BrowserModule" IMPORTATO IN "app-module.ts" MA SENZA LE FUNZIONALITA' DI BOOTSTRAP,
  // E FORNISCE FUNZIONALITA' COME "*ngIf, *ngFor, ecc" AI COMPONENTS DI QUESTO MODULO (AlertComponent)
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
