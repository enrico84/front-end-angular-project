import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <button routerLink="login">LOGIN</button>
    <button routerLink="catalog">CATALOG</button>
    <button routerLink="contacts">CONTACTS</button>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
