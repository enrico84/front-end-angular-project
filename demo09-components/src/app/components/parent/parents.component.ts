import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: `
  <!-- Uso di @Input per settare dei valori -->

  <!-- Componente HELLO -->
  <app-hello name='Fabio' color='red'></app-hello>
  <app-hello name='Enrico'></app-hello>
  <app-hello name='Giovanni'></app-hello>
  
  <!-- Componente METEO -->
  <app-meteo [city] = 'city'>
    Testo passato in app Meteo
    <form #f='ngForm' (submit)='changeCity(f)'>
    <input type="text" name="city" [ngModel]='city.value'>
    <button type='submit'>Cambia città</button>
  </form>
  </app-meteo>

  
  <!-- Componenti CARD -->
  <div class="container mt-3">
    <app-card title='Profilo-Header'>
      <div class='font-weight-bold'>Body</div>
      Lorem ipsum...
    </app-card>

    <app-card title='Form-Header'>
      <div class='font-weight-bold'>Body</div>
      <input type='text'>
      <input type='text'>
      <input type='text'>
    </app-card>

    <app-card>
      <div class='font-weight-bold'>Body</div>
      <div class='row'>
        <div class="col">
            <app-card title='1'>
              <input type='text'>
            </app-card>
        </div>
        <div class="col">
          <app-card title='2'>
            Testo in card
          </app-card>
        </div>
      </div>
    </app-card>
  </div>
  `,
  //templateUrl: './parents.ts.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentComponent implements OnInit {

  city = {value: "Milano"};

  changeCity(form: NgForm): void {
    //this.city = form.value.city;
    this.city = {value: form.value.city};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
