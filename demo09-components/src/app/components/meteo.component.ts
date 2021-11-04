import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_TOKEN } from './config';

@Component({
  selector: 'app-meteo',
  // RENDERIZZO LA PAGINA SOLO QUANDO SI HA UN CAMBIAMENTO DELLA PROPRIETA' @Input
  // APPLICARE QUESTA STRATEGIA SOLO PER COMPONENTI FOGLIA, CHE RICEVONO PROPRIETA'
  // IN INPUT MA SENZA INSTANZIARE AL LORO INTERNO UN SERVICE
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>{{title}}</h3>
    <div *ngIf='weather'>
      <b>{{city.value}}</b> <br/>
      {{weather?.main.temp}}° <br/>
      Umidità {{weather?.main.humidity}}% <br/>
    </div>
    <!--
          Posso passare contenuti definiti tra i due tag di apertura e chiusura
          di <app-meteo> in "parent.component.ts" tramite il tag <ng-content>
      -->
      <ng-content></ng-content>

    {{printMe()}}
  `,
  styles: [`
    `]
})
export class MeteoComponent implements OnInit, OnChanges {
  title: string = "Meteo components - utilizzo del \"ChangeDetectorRef\" ";
  @Input() city: any;
  @Input() unit: string
  weather: any;

  // QUI IL COSTRUTTORE NON HA ANCORA IL VALORE @Input DI "city" PASSATOGLI DAL PARENT-COMPONENT
  // USO DI "ChangeDetectorRef" PER FORZARE IL RENDERING DELLA PAGINA NEL METODO "ngOnChange"
  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef) {
    console.log("Costruttore: ", this.city);
  }

  // CICLO DI VITA: ngOnInit
  // Viene invocato appena dopo il costruttore, non ha ancora il valore di "city"
  ngOnInit(): void {
    console.log("ngOnInit: ", this.city);
  }

  /* 
    CICLO DI VITA: ngOnChange
    Invocato appena dopo "ngOnInit" al primo caricamento ed ogni volta quando viene eseguito 
    un cambiamento al layout.
    Ha in se il valore @Input di "city" passatogli dal parent-component
    Con "cdr.markForCheck()" forzo il rendering della pagina quando viene invocato un change 
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.ngOnChange: ", changes);
    const city = changes.city;
    if(this.city) {
      // Torna un JSON con informazioni sul meteo della città specificata nella stringa
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.currentValue.value}&units=metric&APPID=${APP_TOKEN}`)
        .subscribe(res => {
          console.log(res);
          this.weather = res;
          this.cdr.markForCheck()
        })
    }
  }

  printMe(): void{
    console.log("Render page");
  }

}
