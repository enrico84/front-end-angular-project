import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Device } from "../model/devices";

@Component({
    selector: 'mc-catalog-list',
    template:` 
        <div 
           *ngFor="let device of list_devices"
           (click)="outputSetActive.emit(device)"
           class="list-group-item"
           [ngClass]= "{'active': device.id === active_device?.id}"
        >
        <mc-os-icon [os]="device?.os"></mc-os-icon>
        <span>{{device?.label}}</span>
           <div class="pull-right">
              <mc-os-price [price]="device?.price"></mc-os-price>
             <i class="fa fa-trash" (click)="deleteHandler($event, device)"></i>
           </div>
        </div>
    `,
})
export class CatalogListComponent {

    @Input() list_devices: Device[];
    @Input() active_device: Device; // SETTO COME ATTIVO QUESTO DEVICE AL CLICK SU UNO DELLA LISTA

    /* 
     GLI EVENTI "outputSetActive" E "outputDeleteDevice" PASSERANNO TRAMITE "emit" UN OGGETTO "Device" NEL TEMPLATE,
     IL QUALE VERRA' CATTURATO DAL COMPONENTE PADRE "CatalogComponent"
    */
    @Output() outputSetActive: EventEmitter<Device> = new EventEmitter<Device>();
    @Output() outputDeleteDevice: EventEmitter<Device> = new EventEmitter<Device>();

    /*
      PROPAGAZIONE EVENTI (click):
      PASSANDO "$event" DI TIPO "MouseEvent" NEL METODO "deleteHandler" E INVOCANDO "event.stopPropagation()" 
      IMPEDISCO CHE ALTRI EVENTI DI CLICK, AD ESEMPIO "(click)="outputSetActive.emit(device)", 
      SIANO INVOCATI A CATENA, INVOCATO NELL'OGGETTO PARENT <li>
    */
    deleteHandler(event: MouseEvent, device: Device) {
        event.stopPropagation();  // Stoppa la propagazione di altri eventi click
        this.outputDeleteDevice.emit(device);
    }

}