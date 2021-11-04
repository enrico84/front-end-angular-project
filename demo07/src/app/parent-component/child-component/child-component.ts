import { Component, Input,  Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.html'
})
export class ChildComponent implements OnInit {
  title = "My Child Component";

  myChildValue = "Valore del Child Component";
  numeroChild = 333;
  arrayChild: number[] = [51, this.numeroChild];

  // @Input
  // Espone la props all'esterno per essere
  // utilizzata con il [Property Binding]
  @Input() inputChild = "Valore di Input Child";

  // @Output
  // Consente di inviare dati all'esterno tramite un'istanza della classe EventEmitter 
  // Il Figlio espone un'istanza della classe EventEmitter con cui emettere eventi
  // Il Genitore si legherà (Event Binding) a questo evento e reagirà di conseguenza
  @Output() outputChild: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo per la generazione dell'evento
  // Invocando il metodo emit con un unico argomento 
  childEventEmitter() {
    this.outputChild.emit(this.arrayChild);
  }

  // Lancia alert con eventuali argomenti
  apriAlert(args?: string) {
    let messaggio;
    alert(args != null ? messaggio=args : "Alert del CHild Component");
  }

}
