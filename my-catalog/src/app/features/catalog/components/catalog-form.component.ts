import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from '../model/devices';

@Component({
  selector: 'mc-catalog-form',
  template: `
    <!-- 
        FORM PER AGGIUNGERE UN OGGETTO
        [ngModel] E LA PROPS "name" DELLO STESSO TAG COLLEGANO IL VALORE DIGITATO 
        CON LA TEMPLATE-REFERENCE-VARIABLE #f, COSI CHE AL (submit) DEL FORM
        L'OGGETTO passato alla funzione "save(#f)" CONTERRA' I VALORI DEI VARI CAMPI(label, os, memory, price)
      -->
      <form #f="ngForm" (submit)="saveHandler()">
         <!-- 
            [ngModel] = "activeDevice?.label" ONE-WAY-BINDING: MODIFICANDO LA PROPRIETA'
            VIENE MODIFICATO IL VALORE DEL CAMPO DI INPUT NELLA FORM, IN QUESTO CASO
            POPOLA IL CAMPO DI INPUT CON LA LABEL QUANDO VIENE SELEZIONATO DALLA LISTA - E POPOLATO IL CAMPO "activeDevice"
          -->
        <input
          class="form-control"
          type="text"
          [ngModel] = "activeDevice?.label"
          name="label"
          placeholder="Device Model"
        >
        <input
          class="form-control"
          type="number"
          [ngModel] = "activeDevice?.price"
          name="price"
          placeholder="1"
          value="1"
          min="1"
        >
        <div class="btn-group">
          <button type="submit" class="btn btn-info">
            {{activeDevice?.id ? 'EDIT' : 'SAVE'}}
          </button>
          <button 
            type="button" 
            class="btn btn-warning"
            (click)="resetHandler()"
            [disabled]="!activeDevice.id">
            RESET
          </button>
        </div>
      </form>
  `,
  styles: [
  ]
})
export class CatalogFormComponent implements OnChanges {

  @Input() activeDevice : Device;

  @Output() saveOutput: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() resetOutput: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('f') form: NgForm;

  // INVIA LA SUBMIT DEL FORM
  saveHandler() {
    this.saveOutput.emit(this.form.value);
  }

  // IL RESET DELLA FORM AVVIENE SOLO SE E' STATO SELEZIONATO UN DEVICE 
  // DALLA LISTA ("activeDevice" E' TRUE) E NON DOPO UN AGGIUNTA
  // "ngOnChanges" RILEVA IL CAMBIAMENTO DELLE PROPRIETA' @Input() COME "activeDevice" 
  ngOnChanges(changes: SimpleChanges): void {
    const active: Device = changes.activeDevice.currentValue;
    console.log(active);
    if(!active.id) {
      this.form?.reset();
    }
  }

  // RESETTA IL FORM
  resetHandler() {
    this.resetOutput.emit();
    this.form.reset();
  }

}
