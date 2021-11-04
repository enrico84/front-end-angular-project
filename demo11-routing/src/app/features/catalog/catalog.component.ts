import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from './model/device';

const URL = "http://localhost:3000";

@Component({
  selector: 'app-catalog',
  template: `
      <div *ngIf="error" class="alert alert-danger">
        errore <i class="fa fa-times" (click)="error = null"></i>
      </div>

      <!-- 
        FORM PER AGGIUNGERE UN OGGETTO TRAMITE IL METODO "add(f)" 
        [ngModel] E LA PROPS "name" DELLO STESSO TAG COLLEGANO IL VALORE DIGITATO 
        CON LA TEMPLATE-REFERENCE-VARIABLE #f, COSI CHE AL (submit) DEL FORM
        L'OGGETTO passato alla funzione "save(#f)"" CONTERRA' I VALORI DEI VARI CAMPI(label, os, memory, price)
      -->
     <form class="mb-3" #f="ngForm" (submit) = "save(f)">
        <table>
          <tr>
           <td><label for="label">Nome device:</label></td>
           <td>
             <!-- 
              [ngModel] = "activeDevice?.label" ONE-WAY-BINDING: MODIFICANDO LA PROPRIETA'
              VIENE MODIFICATO IL VALORE DEL CAMPO DI INPUT NELLA FORM, IN QUESTO CASO
              POPOLA IL CAMPO DI INPUT CON LA LABEL QUANDO VIENE SELEZIONATO DALLA LISTA - E POPOLATO IL CAMPO "activeDevice"
            -->
             <input
             [ngModel] = "activeDevice?.label"
             type="text"
             name="label" 
             placeholder="device model">
           </td>
          </tr>
          <tr>
           <td><label for="os">Sistema Operativo device:</label></td>
           <td>
             <select
               [ngModel] 
               name="os"
               >
               <option value="ios" selected>Apple</option>
               <option value="android">Android</option>
             </select>
           </td>
          </tr>
          <tr>
           <td><label for="memory">Memoria in byte:</label></td>
           <td>
             <input
               [ngModel] 
               type="number"
               name="memory"
               placeholder="1000" 
               value="1000" 
               min="1000" 
               >
           </td>
          </tr>
          <tr>
           <td><label for="price">Prezzo:</label></td>
           <td>
             <input
               [ngModel] 
               type="number"
               placeholder="1"
               name="price" 
               value="1" 
               min="1">
           </td>
          </tr>
          <tr>
           <td colspan="2">
             <button type="submit">
               {{activeDevice ? 'EDIT': 'ADD'}}
             </button>
            </td>
           <td><button type="button" (click) = "reset(f)">RESET</button></td>
          </tr>
        </table>
      </form>

      <!-- LISTA OGGETTI -->
      <li 
        class="list-group-item catalog-li"
        *ngFor="let device of devices;"
        [ngClass] = "{'active' : device.id === activeDevice?.id}"
        (click)="setActiveDevice(device)"
        >
        <!-- USO DELLE CLASSI DI BOOTSTRAP e i tag [style], [ngClass]-->
        <i 
          class="fa" 
          [ngClass] = "{
            'fa-android': device.os === 'android',
            'fa-apple': device.os === 'ios'
          }"
          [style.color]="device.os === 'android' ? 'green' : 'grey' "
          >
        </i>
        
        <!-- USO DELLA CUSTOM PIPE "catalogPipe" --> 
        {{device.label}} ({{device.memory | catalogPipe}}) -
        <span [style.color]="device.price > 500 ? 'red' : null">
          €{{device.price}}
        </span>

        <div class="pull-right">
          <!-- 
            PROPAGAZIONE EVENTI (click):
            PASSANDO "$event" NEL METODO "delete" E INVOCANDO "event.stopPropagation()" IMPEDISCO CHE ALTRI EVENTI DI (click) VENGANO
            INVOCATI A CATENA, COME IL "(click)=setActiveDevice(device)" INVOCATO NELL'OGGETTO PARENT <li>
          -->
          <i class="fa fa-trash" (click)="delete(device, $event)"></i>
        </div>
      </li>
  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {
  devices: Device[]; // Oggetto di tipo model Device
  activeDevice: Device; // Oggetto di tipo model Device
  error: any;

  // Il costruttore Inietta dipendenze e inizializza i dati
  constructor(private http: HttpClient) {
    console.log("Catalog constructor");
   } 

   // ngOnInit: operazioni da effettuare all'avvio del componente
  ngOnInit(): void {
    console.log("Catalog OnInit");
    this.http.get< Device[]>(`${URL}/devices`)
    .subscribe( (result: Device[]) => {  // Tipizzo il risultato della GET ad un Array di Device
      this.devices = result;
    });
  }

  // DELETE di un Device tramite la Http-Delete
  delete(device: Device, event: MouseEvent): void {
    event.stopPropagation(); // Stoppa la propagazione di altri eventi click

    this.http.delete(`${URL}/devices/${device.id}`)
    /* 
      Invoco nella HTTP DELETE oltre la cancellazione logica dall'array "devices" 
      anche la cancellazione fisica dell'oggetto dal file "db.json"
    */
    .subscribe( 
      () => {
         //const index = this.devices.indexOf(device);
        const index = this.devices.findIndex(d => d.id === device.id);
        this.devices.splice(index, 1);
        
        /*
          Gestico nella subscribe eventuali errori tornati dal server.
          Per simulare un errore cambiare la stringa HTTP della DELETE (es. in "http://.../devicessss/..")
        */
      }, err => this.error = err  
    );
  }

  // OPERAZIONE DA ESEGUIRE TRA ADD O EDIT DI UN DEVICE
  save(form: NgForm): void {
    if(this.activeDevice) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  // ADD DI UN DEVICE NELL'ARRAY "devices" 
  add(form: NgForm): void {
    //console.log(form.value);
    this.http.post<Device>(`${URL}/devices/`, form.value).subscribe(
      (result: Device) =>  {
        this.devices.unshift(result);
      });
  }

  //  EDIT DI UN Device
  edit(form: NgForm) {
    this.http.patch<Device>(`${URL}/devices/${this.activeDevice.id}`, form.value).subscribe(
      res => {
        const index = this.devices.findIndex( d => d.id === this.activeDevice.id); 
        this.devices[index] = res;
      });
  }

  setActiveDevice(device: Device): void {
    this.activeDevice = device;
  }

  //RESET del form e dell'eventuale item selezionato dalla lista
  reset(form: NgForm): void {
    this.activeDevice = null;
    form.reset();
  }

}
