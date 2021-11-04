import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  constructor(private router: Router) { }

  search(): void {
    this.router.navigateByUrl('catalog/no-result');
  }


}
