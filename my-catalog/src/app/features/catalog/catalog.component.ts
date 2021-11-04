import { Component } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { CatalogStore } from './services/catalog.store';

@Component({
  selector: 'mc-catalog',
  template: `
   
   <!--
    L'EVENT "(saveOutput)" CATTURA L'EVENTO "$event" 
    CON DENTRO UN OGGETTO "Device" EMESSO DAL COMPONENTE FIGLIO "<mc-catalog-form>",
    PASSANDO TALE EVENTO AL METODO DEL COMPONENTE PADRE "CatalogComponent" OVVERO A 
    "save(device)"
  -->
   <mc-card title="FORM">
     <mc-catalog-form
       [activeDevice]="store.activeDevice"
       (saveOutput)="service.save($event)"
       (resetOutput)="service.reset()"
     ></mc-catalog-form>
   </mc-card>  

  <mc-card title="LIST">
    <mc-catalog-list
      [list_devices]="store.devices"
      [active_device] = "store.activeDevice"
      (outputSetActive) = service.setActiveDevice($event)
      (outputDeleteDevice) = service.deleteDevice($event)
    >
    </mc-catalog-list>
  </mc-card>

  `,
  styles: [
  ]
})
export class CatalogComponent {
  
  constructor(public service: CatalogService,
              public store: CatalogStore) {
    service.getAllCatalog();
  }

}
