import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-image-gallery',
  template: `
    <!-- SETTO COME PRIMA IMMAGINE DELLA GALLERY LA PROPRIETA' "activeImage"  -->
     <img [src]="activeImage" width="100%" height="150">
    <div class="nested">
      <!-- AL CLICK SU UNA IMG CAMBIA ANCHE L'IMMAGINE PRINCIPALE DELLA GALLERY -->
      <div *ngFor="let image of hotelActive?.images;"
        (click)="activeImage = image"
      >
          <img [src]="image" width="100%">
      </div>
     
    </div>
  `,
  styles: [
  ]
})
export class ImageGalleryComponent {

  @Input() activeImage: string;
  @Input() hotelActive: Hotel;
}
