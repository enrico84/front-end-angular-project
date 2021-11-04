import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  // styleUrls: ['./pipe-component.component.css']
  styles: [`
    span {
      font-weight: bold;
    }
    .myHR {
      width: 50%;
      margin-left: 0px;
      border-width: 5px;
    }
    .mySimpleHR {
      width: 50%;
      margin-left: 0px;
    }
  `]
})
export class PipeComponent implements OnInit {
  title="Pipe";

  miaData: Date = new Date(1984, 0, 19);
  prezzo = 65.43216;
  guadagno = 0.37;
  nome = "Giovanni";

  jsonObject = {
    nome: "Tonino",
    cognome: "Canino",
    dettagli: {
      eta: 33,
      pregi: ["Alto", "Bello", "Onesto"]
    }
  }

  object = {nome: "fragole", prezzo: 6};
  
  map = new Map([[1, 'Arance'], [2, 'Mele']]);

  // Proprietà pipe personalizzata
  stringa = "Pipe personalizzata";
  miaLista = ["Aldo", "Giovanni", "Giacomo"]; 
  

  myObservable = new Observable(observer => {
    setTimeout( () => {
      observer.next('A');
    }, 0 );
    setTimeout( () => {
      observer.next('B');
    }, 1000 );
    setTimeout( () => {
      observer.next('C');
    }, 2000);
    setTimeout( () => {
      observer.next('D');
    }, 3000);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
