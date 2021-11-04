import { Component } from '@angular/core';

@Component({
  selector: 'app-no-result.ts',
  template: `
    <div class="wrapper centered">
      <div class="card vh-centered center">
        <div class="title">No results</div>
        <div class="content">
          In this demo you can find results only in Milano and Roma
        </div>
        <button type="submit" routerLink="../" >BACK</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class NoResultComponent {

}
