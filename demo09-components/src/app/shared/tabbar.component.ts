import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabbarItem } from '../model/TabbarItem';

@Component({
  selector: 'app-tabbar',
  template: `
  <ul class="nav nav-tabs">
    <li class="nav-item" *ngFor='let item of items'
      (click)='tabHandler(item)'
    >
      <a class="nav-link"
         aria-current="page"
        [ngClass]= "{ 'active': activeItem?.id === item.id }"
         >
         {{item.name}}
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  `,
  styles: [`
    `]
})
export class TabbarComponent  {

  @Input() items: TabbarItem[];
  @Input() activeItem: TabbarItem[];

  // CON @Output SI EMETTE UN EVENTO ALL'ESTERNO CHE QUI CHIAMO "tabClick"
  @Output() tabClick: EventEmitter<TabbarItem> = new EventEmitter();

  // EMETTO L'EVENTO "tabClick" CON "emit" INVIANDO UN ITEM,
  // IN "main-tabbar.component.ts" INTERCETTO L'EVENTO RECUPERANDO L'ITEM
  tabHandler(item: TabbarItem): void {
    console.log("* Funzione tabHandler: ", item);
    this.tabClick.emit(item);
  }

}
