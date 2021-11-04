import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULO PER LE ANIMAZIONI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// COMPONENTI CREATI
import { CardComponent } from './components/card/card.component';
import { AnimatedButtonComponent } from './components/animated-button.component';
import { AnimatedTextComponent } from './components/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,            // ==> Componente aggiunto
    AnimatedButtonComponent,  // ==> Componente aggiunto
    AnimatedTextComponent,    // ==> Componente aggiunto
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule // ==> Modulo per le animazioni
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
