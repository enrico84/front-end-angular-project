import { Component, OnInit } from '@angular/core';
import { TabbarItem } from '../model/TabbarItem';

@Component({
  selector: 'app-main-tabbar',
  template: `
    <div class='font-weight-bold'>{{title}}</div>
    <app-tabbar
      [items]='customers'
      [activeItem]='activeCustomer'
      (tabClick)='openDetailCustomer($event)'
    >
    </app-tabbar>
    <div class='card' *ngIf='activeCustomer'>
      <div class='card-header'>{{activeCustomer.name}}</div>
      <div class='class-body' *ngIf='activeCustomer'>
        {{activeCustomer.desc}}
        {{activeCustomer.country}}
        <img src='https://maps.googleapis.com/maps/api/staticmap?center={{activeCustomer.country}}&zoom=10&size=200x200&key=AIzaSyDSBmiSWV4-AfzaTPNSJhu-awtfBNi9o2k'/>
      </div>
    </div>
  `,
  styles: [``]
})
export class MainTabbarComponent implements OnInit {
  title:string = "Tabbar riutilizzabile. Passaggio di valori tramite @Input"

customers: TabbarItem[] = [
      {id:1, name: 'Enrico', country: 'Italy', desc: 'Atletico'},
      {id:2, name: 'Alvaro', country: 'Spain'},
      {id:3, name: 'Thiago', country: 'Brasil'}
  ]

  // SETTO "activeCustomer" ALL'AVVIO PASSANDO TALE PROPRIETA'
  // NEL COMPONENT "app-tabbar" ALLA PROPRIETA' DI TIPO @Input "active"
  activeCustomer = this.customers[0];

  // L'@OUTPUT "tabclick" DEFINITO IN "tabbar.component.ts" MI HA INVIATO
  // UN OGGETTO $EVENT CONTENENTE UN "TabbarItem"
  openDetailCustomer(customer: TabbarItem) : void {
    console.log("* Funzione openDetailCustomer - customer selezionato tramite @Output: ", customer);
    this.activeCustomer = customer;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
