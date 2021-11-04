import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-os-icon',
  template: `
    <i class="fa " [ngClass] = "{
      'fa-android': os === 'android',
      'fa-apple': os === 'ios'
      }">
    </i>
  `,
  styles: [
  ]
})
export class OsIconComponent {
  @Input() os: string;

}
