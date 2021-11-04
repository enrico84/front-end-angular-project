// DIPENDENZE DA ALTRI MODULI
// BrowserModule fornisce servizi essenziali per lanciare ed eseguire
// un'applicazione nel browser.
// Re-esporta anche il modulo Common che include direttive e pipe di Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';   // Modulo Routing
import { RouterModule } from '@angular/router'; // Modulo Routing
import { FormsModule } from '@angular/forms';  // Modulo form
import { HttpClientModule } from '@angular/common/http'; // Modulo HTTP
import { Utility } from "./services/utility"; // injector di un Service

// COMPONENTI DEL MODULO
import { AppComponent } from './app.component';
import { ParentComponent } from './parent-component/parent-component';
import { ChildComponent } from './parent-component/child-component/child-component';
import { RechildComponent } from './parent-component/rechild-component/rechild.component'
import { ExampleComponent } from './example-component/example-component.component';
import { HttpComponent } from './http-component/http-component';
import { PipeComponent } from './pipe-component/pipe-component.component';
import { DirettiveComponent } from './direttive-component/direttive-component.component';
import { DirettiveAttributoComponent } from './direttive-attributo-component/direttive-attributo.component';
import { MyTranslatorPipe } from './pipe-component/my-translator.pipe';
import { MiaCustomPipe } from './parent-component/rechild-component/mia-custom.pipe';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


// DEFINIZIONE DEL MODULO
// Il decoratore arricchisce la classe "AppModule" con i metadati relativi ai principali
// elementi costitutivi del modulo [declarations, imports, providers, bootstrap]
@NgModule({
  // Componenti, direttive e pipe del modulo
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    RechildComponent,
    ExampleComponent,
    HttpComponent,
    PipeComponent,
    DirettiveComponent,
    DirettiveAttributoComponent,
    MyTranslatorPipe,
    MiaCustomPipe,
    TemplateDrivenComponent
  ],
  // Moduli importati per essere utilizzati dai Components di questo modulo
  // viene importato anche "AppRoutingModule" che è il modulo che gestice il Routing,
  // FormsModule importa una direttiva "ngForm" per gestire i form in Angular
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // Lista dei Service. La gestione dei service è stata aggiornata in Angular
  // Aggiunge provider all'injector della dipendenza nella root dell'applicazione,
  // rendendo tali servizi disponibili ovunque nell'applicazione
  // Un service può essere anche importato direttamente dal componente
  providers: [
    // Iniettare un Service(si può scegliere tra un service fake o uno reale):
    // ThemeService oppure
    // {provide: ThemeService, useClass: FakeThemeService},
    // {provide: ThemeService, useClass: ThemeService}
    Utility
  ],
  // Componente da utilizzare come root component dell'applicazione
  bootstrap: [AppComponent]
})
// L'applicazione viene lanciata con bootstrapping dell'AppModule nel file main.ts
export class AppModule { }
