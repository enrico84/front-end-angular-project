import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { IntToArrayPipe } from "./pipes/int-to-array.pipe";

// CON "exports" RENDO VISIBILI I COMPONENTI, PIPE O DIRETTIVE DAPPERTUTTO NELL'APPLICAZIONE
// CON "imports" IMPORTO LE DIRETTIVE USATE NEI COMPONENTI DI QUESTO MODULO , COME *ngIf
const components = [
    SeparatorComponent,
    CardComponent,
    IntToArrayPipe
];

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {}