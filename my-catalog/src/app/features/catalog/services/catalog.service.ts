import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Device } from "../model/devices";
import { CatalogStore } from "./catalog.store";

const URL = environment.url;
@Injectable({
    providedIn: 'root'
})
export class CatalogService {
  
  error: any;

  constructor(private http: HttpClient,
              private store: CatalogStore) {}

  // SETTO COME OGGETTI ATTIVI IL DEVICE 
  setActiveDevice(device: Device): void {
    this.store.setActive(device);
  }

   // GET - TIPIZZO IL "result" DELLA GET AD UN ARRAY DI DEVICE  
   getAllCatalog() {
     this.http.get<Device[]>(`${URL}/devices`)
     .subscribe( (result: Device[]) => this.store.getAll(result));
   }

   /* DELETE
      Invoco nella HTTP DELETE oltre la cancellazione logica dall'array "devices" 
      anche la cancellazione fisica dell'oggetto dal file "db.json"
    */
   deleteDevice(device: Device) {
     this.http.delete(`${URL}/devices/${device.id}`).subscribe(
       () => {
           this.store.delete(device.id)
        /*
          Gestico nella subscribe eventuali errori tornati dal server.
          Per simulare un errore cambiare la stringa HTTP della DELETE (es. in "http://.../devicessss/..")
        */
        }, err => this.error = err
     );
   }

   // OPERAZIONE DA ESEGUIRE TRA ADD O EDIT DI UN DEVICE
   save(device: Device) {
    // console.log(device);
    if(this.store.activeDevice.id) {
      this.edit(device);
    } else {
      this.add(device);
    }
   
   }

   // ADD DI UN DEVICE NELL'ARRAY "devices" 
   add(device: Device) {
    this.http.post<Device>(`${URL}/devices/`, device)
    .subscribe( (result: Device) => this.store.add(result));
   }

   // EDIT DI UN DEVICE
   edit(device: Device) {
    this.http.patch<Device>(`${URL}/devices/${this.store.activeDevice.id}`, device)
    .subscribe( (result: Device) => this.store.edit(result));
   }

   // PULISCE IL FORM
   reset(): void {
    this.store.reset();
   }
}