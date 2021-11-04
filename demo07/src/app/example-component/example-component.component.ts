import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  //styleUrls: ['./example-component.component.css']
  styles: [`
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
export class ExampleComponent implements OnInit {

  title = "My Template";
  Expressioni = "Espressioni";
  myImgUrl = "./assets/limoni.jpg";
  myNum = 3;
  imgHeight = 100;
  sesso = "M";
  myClass = false;
  myModel = "MyModel input text"

  constructor() { }

  @ViewChild('myRef') myRef: ElementRef;

  mostraModel(): void {
    alert(this.myModel);   
  }

  ngOnInit(): void {
  }

  myVal() : number {
    return this.myNum;
  }

  clickHandler(event: MouseEvent) {
    console.log("Mouse handler: " ,event);
  }

  inputHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log("Keyboard handler: " , event);
    console.log("Valore digitato: " , target.value);
    
  }

  mostraRef(ref: any) {
    alert(ref);
    this.myRef.nativeElement.style.color = "#f00";
    this.myRef.nativeElement.value = 7;
  }

}
