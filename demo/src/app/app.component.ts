import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: 'app.component.html',
  template: ` 
              <h1>{{ title }}</h1>
              <p>{{ 1 + 3 }}</p>
              <p *ngFor = "let number of [1,2,3,4]">{{ saluto }}</p>
              <p>{{ sum(3, 5) }}</p>
              <p>{{ count }}</p>
              <p>{{ count * 2 }}</p>
              <p><button (click)="inc()">+</button><button (click)="count = count - 1">-</button></p>
              <div [class.red] = "count > 15">Count è {{count > 15 ? 'molto alto' : 'molto basso'}}</div>
              <div [ngClass] = "count > 15 ? redClass : blueClass">Count è {{count > 15 ? 'molto alto' : 'molto basso'}}</div>
              <div [class.red] = "count > 15" [class.blue] = "count <= 15">Count è {{count > 15 ? 'molto alto' : 'molto basso'}}</div>

              <!-- [hidden] nasconde il button, ma rimane nel DOM html -->
              <p><button [hidden]="url" (click) = "renderImage()">Carica immagine</button></p>
              <p><button [hidden]="!url" (click) = "unloadImage()">Unload immagine</button></p>
              <p *ngIf="url"> <!-- *ngIf rimuove il tag anche dal DOM html, ispezionando la pagina non lo si trova -->
                 <button (click)="heightValue = heightValue + 10">+</button>
                 <button (click)="heightValue = heightValue - 10">-</button>
              </p>
              <img [height]="heightValue" [src] = "url" />
              `,
  // styleUrls: ['./app.component.css']
  styles: [`
    .red{
      color: red;
    }
    .blue {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'Angular demo 1';
  saluto = 'Ciao Enrico';
  count = 10;
  redClass = 'red';
  blueClass = 'blue';
  url: string;
  heightValue: number = 100;
 
  sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  inc(): void{
    const count = 11;
    this.count += 1;
  }
  
  renderImage(): void {
    this.url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F480px-Angular_full_color_logo.svg.png&f=1&nofb=1';
  }

  unloadImage(): void {
    this.url = null;
  }

  ciao(): void {
    console.log('Ciao dalla funzione'!);
  }
}
