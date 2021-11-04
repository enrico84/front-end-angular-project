import {Pipe, PipeTransform} from '@angular/core';

// PIPE PERSONALIZZATA

@Pipe({
    name: 'pipeCustom'
})
export class MiaCustomPipe implements PipeTransform {

    transform(regione: string): string {
        let capoluogo: string;

        switch(regione) {
            case 'Campania': capoluogo = 'Napoli'; break;
            case 'Lombardia': capoluogo = 'Milano'; break;
            case 'Sicilia': capoluogo = 'Palermo'; break;
            default: capoluogo='Nessun capoluogo trovato per la regione'; break;

        }

        return capoluogo;
    }
}
