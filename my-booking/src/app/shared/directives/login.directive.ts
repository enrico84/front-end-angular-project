import { Directive, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { interval, timer } from 'rxjs';

@Directive({
    selector: "[isAuthorized]"
})
export class LoginDirective implements OnInit {

    private hasView = false;
    source = interval(200);

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService) {

       console.log("constructor");     
        
    }

    // @Input()
    // set isAuthorized(value) {

    //     if (value && !this.hasView) {
    //         this.viewContainer.createEmbeddedView(this.templateRef);
    //         this.hasView = true;
    //     } else if(!value && this.hasView){
    //       this.viewContainer.clear();
    //       this.hasView = false;
    //     } 
    // }

 
    subscribe = this.source.subscribe(() => this.checkLog());

     ngOnInit() {
        this.checkLog();
     }

    checkLog(): void {
        const isAuth = this.authService.isLogged();
        if (isAuth && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if(!isAuth && this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        } 
    } 

}