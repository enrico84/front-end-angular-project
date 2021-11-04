import { Injectable } from '@angular/core';

// type: usato per creare "Alias", pesano molto poco come le Interface A DIFFERENZA delle Classi
export type Theme = 'dark' | 'light'; // la variabile di questo tipo può avere SOLO questi due valori

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Servizio che si inietta nei Component

  public value; // la variabile può avere SOLO i valori 'dark' o 'light';

  constructor() { 
  }
  
  public setTheme(theme: Theme): void {
    this.value = theme;
    console.log('Service - valore theme: ', this.value)
  }
}
