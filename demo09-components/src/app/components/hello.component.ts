//@ts-ignore
import { Component,Input } from '@angular/core'

//@ts-ignore
@Component({
  selector: 'app-hello',
  template: `
    <h3>{{title}}</h3>
    <h3 [style.color]="color">
      Ciao da {{name}}
    </h3>
  `
  // templateUrl: './hello.component.html'
})
export class HelloComponent {
  title = "Ciao da Hello Component";

  // I tag @Input sono come dei set, in cui il valore viene inviato da "parent.component.ts"
  // e settato in "hello-component.ts"
  @Input() name: string;
  @Input() color = "blue";

}
