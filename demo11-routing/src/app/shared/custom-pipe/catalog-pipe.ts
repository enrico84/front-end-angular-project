import {Pipe, PipeTransform} from "@angular/core";

// PIPE PERSONALIZZATA

@Pipe({
    name: "catalogPipe"
})
export class CatalogPipe implements PipeTransform {
    
    transform(memory: number): string {
        let mem: string;

        if (memory >= 1000) {
            memory = memory / 1000;
            mem = memory + ' Gb';
        
        } else if (memory < 1000 && memory >= 100) {
            memory = memory / 100;
            mem = memory + ' Mb';
        
        } else if (memory < 100 && memory > 0) {
            mem = memory + ' byte';
        
        } else if (memory < 0) {
            mem = '';
        }

        return mem;
    }
    
}