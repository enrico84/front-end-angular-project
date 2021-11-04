import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive-component',
  templateUrl: './direttive-component.component.html',
  //styleUrls: ['./direttive-component.component.css']
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
  .myUnderline {
    text-decoration:underline;
  }
  .myUnderlineNone {
    text-decoration:none;
  }
  .myRed {
    color: red;
    font-style: normal;
  }
  .myBlue {
    color: blue;
    font-style: italic;
  }
`]
})
export class DirettiveComponent implements OnInit {

  myNum2 = 4;
  myNames = ["Al", "John", "Jack"];
  myCssClass = "myBlue";
  mySize = 12;
  visible = false;
  myImgUrl = "./assets/limoni.jpg";
  imgHeight = 100;
  section = "one";

  myInterface : User = {nome: "Enrico", cognome: "Capone", eta: 37}

  myInterfaces: User[] = [
    {nome: "Aldo", cognome: "Baglio", eta: 55},
    {nome: "Giovanni", cognome: "Storti", eta: 60},
    {nome: "Giacomo", cognome: "Poretti", eta: 58}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibilityList() {
    this.visible = !this.visible;
  }

  loadImage() {
    this.myImgUrl = "./assets/limoni.jpg";
  }

  unLoadImage() {
    this.myImgUrl = null;
  }

  goto(value: string) {
    this.section = value;
  }
}

interface User {
  nome: string;
  cognome: string;
  eta: number;
}
