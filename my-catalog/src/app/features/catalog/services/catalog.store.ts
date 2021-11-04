import { Injectable } from "@angular/core";
import { Device } from "../model/devices";

// SERVICE CHE GESTICE LA MANIPOLAZIONE DELLO STATO APPLICATIVO - GESTIONE OGGETTI
@Injectable({
    providedIn: 'root'
})
export class CatalogStore {
  devices: Device[];
  activeDevice: Device = {};

  setActive(device: Device) {
    this.activeDevice = device;
  }

  getAll(devices: Device[]) {
    this.devices = devices;
  }

  delete(deviceId: number) {
    const index = this.devices.findIndex(d => d.id === deviceId);
    this.devices.splice(index, 1);
    this.activeDevice = {};
  }

  add(device: Device) {
    this.devices.push(device);
    this.activeDevice = {};
  }

  edit(device: Device) {
    const index = this.devices.findIndex(d => d.id === this.activeDevice.id);
    this.devices[index] = device;
  }

  reset() {
    this.activeDevice = {};
  }

}