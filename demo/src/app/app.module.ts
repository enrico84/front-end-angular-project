// DIPENDENZE DA ALTRI MODULI
// BrowserModule fornisce servizi essenziali per lanciare ed eseguire
// un'applicazione nel browser.
// Re-esporta anche il modulo Common che include direttive e pipe di Angular 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTI DEL MODULO
import { AppComponent } from './app.component';

// DEFINIZIONE DEL MODULO
// Il decoratore arricchisce la classe "AppModule" con i metadati relativi ai principali 
// elementi costitutivi del modulo [declarations, imports, providers, bootstrap]
@NgModule({
  // Componenti, direttive e pipe del modulo
  declarations: [
    AppComponent
  ],
  // Moduli importati per essere utilizzati dai componenti del modulo
  imports: [
    BrowserModule
  ],
  // Lista dei Service. La gestione dei service è stata aggiornata in Angular
  // Aggiunge provider all'injector della dipendenza nella root dell'applicazione,
  // rendendo tali servizi disponibili ovunque nell'applicazione
  // Un service può essere anche importato direttamente dal componente
  providers: [
    // MyService
  ],
  // Componente da utilizzare come root component dell'applicazione
  bootstrap: [AppComponent]
})
// L'applicazione viene lanciata con bootstrapping dell'AppModule nel file main.ts
export class AppModule { }
