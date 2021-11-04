import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <div class="content">
      <form #contactForm="ngForm" (submit)="email.emit(contactForm.value)">
        <input [ngModel] name="inputMail" type="text" placeholder="Your email*" required>
        <textarea [ngModel] name="msg" cols="20" rows="6" placeholder="Your message*" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class ContactFormComponent {
  @Output() email: EventEmitter<any> = new EventEmitter<any>();

}
