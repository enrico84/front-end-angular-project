import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.html'
})
export class ParentComponent implements OnInit {
  title = "My Parent Component";

  // Props da passare al componente figlio ChildComponent via @Input
  stringaParent = "Valore di stringaParent che sovrascrive il valore di child";

  // Props modificabile dal componente figlio ChildComponent via @Output
  numeroParent = 10;

  constructor() { }

  ngOnInit(): void {
  }

  // Listener che gestisce l'output del ChildComponent recuperandone il payload $event
  onOutputParent($event): void {
    // Valore iniziale della props del Parent
    console.log("Il valore iniziale di numeroParent è :" ,this.numeroParent);

    // Contenuto del payload inviato dall'emitter
    console.log("Il contenuto del payload è: " + $event[0] + " - " +$event[1]);
    
    // Assegna il valore della props del Child al props del Parent
    this.numeroParent = $event[1];
  }

  apriAlert() {
    alert('Click Parent');
  }

}