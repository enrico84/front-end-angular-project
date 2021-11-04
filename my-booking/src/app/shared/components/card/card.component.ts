import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>  
      <div class="title" *ngIf="title">{{title}}</div>
      <div [ngClass]="{
        'content': contentPadding,
        'center': isCenteredContent
      }">
        <ng-content></ng-content>
      </div>
    </div>    
  `,
  styles: [
  ]
})
export class CardComponent {

  @Input() isScrollable: boolean; //false di default
  @Input() isCenteredContent: boolean; //false di default
  @Input() contentPadding = true; // Di default applico la classe css ".content" al tag
  @Input() title: string;
  @Input() customCls: string;  // La classe Css passata dal template
  
  /*
    AGGIUNGO AL <app-card> LE CLASSI CSS TORNANDOLE NELLA VARIABILE "cls"
    DI DEFAULT VIENE SEMPRE APPLICATA LA CLASSE ".card" al tag
  */
  @HostBinding('className') get className() {
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }
  
}
