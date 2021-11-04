import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { LoginDirective } from "../shared/directives/login.directive";
import { NavbarComponent } from "./components/navbar.component";

// CON "exports" RENDO VISIBILI I COMPONENTI, PIPE O DIRETTIVE DAPPERTUTTO NELL'APPLICAZIONE
// CON "imports" IMPORTO LE DIRETTIVE USATE NEI COMPONENTI DI QUESTO MODULO , COME *ngIf
@NgModule({
    declarations: [
        NavbarComponent,
        LoginDirective],
    exports: [
        NavbarComponent,
        LoginDirective],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class CoreModule {}