import { Component, Input } from "@angular/core";

@Component({
    selector: 'mc-card',
    template: `
        <div class="card bg-dark mb-3">
            <div class="card-header"
                (click)="opened = !opened">
                {{title}}
                <i  class="fa" 
                    [ngClass]="{
                        'fa-arrow-right': opened,
                        'fa-arrow-down': !opened
                    }"></i> 
            </div>
            
            <div class="card-body" *ngIf="opened">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: []
})
export class CardComponent {
    @Input() title: string;
    opened: boolean = true;
}