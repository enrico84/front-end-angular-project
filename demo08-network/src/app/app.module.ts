// DIPENDENZE DA ALTRI MODULI
// BrowserModule fornisce servizi essenziali per lanciare ed eseguire
// un'applicazione nel browser.
// Riesporta anche il modulo Common che include direttive e pipe di Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Modulo per gestire il Routing
import { AppRoutingModule } from './app-routing.module';

// COMPONENTI DEL MODULO
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';
import { BoldPipe } from './bold.pipe';

// DEFINIZIONE DEL MODULO
// Il decoratore arricchisce la classe "AppModule" con i metadati relativi ai principali 
// elementi costitutivi del modulo [declarations, imports, providers, bootstrap]
@NgModule({
  // Componenti, direttive e pipe del modulo
  declarations: [
    AppComponent,
    LoginComponent,
    NetworkComponent,
    ProfileComponent,
    BoldPipe
  ],
  // Moduli importati per essere utilizzati dai Components di questo modulo
  // viene importato anche "AppRoutingModule" che è il modulo che gestice il Routing
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // Lista dei Service o Pipe. La gestione dei service è stata aggiornata in Angular
  // Aggiunge provider all'injector della dipendenza nella root dell'applicazione,
  // rendendo tali servizi disponibili ovunque nell'applicazione
  // Un service può essere anche importato direttamente dal componente
  providers: [
    // Iniettare un Service(si può scegliere tra un service fake o uno reale):
    // ThemeService oppure
    // {provide: ThemeService, useClass: FakeThemeService},
    // {provide: ThemeService, useClass: ThemeService}
    BoldPipe
  ],
  // Componente da utilizzare come root component dell'applicazione
  bootstrap: [AppComponent]
})
export class AppModule { }
