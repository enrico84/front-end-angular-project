// type: usato per creare "Alias", pesano molto poco come le Interface A DIFFERENZA delle Classi
export type Theme = "dark" | "light"; // la variabile di questo tipo può avere SOLO questi due valori

export class ConfigService {
    public theme = "dark";

    setTheme(valueTheme: Theme) :void {
        this.theme = valueTheme;
    }
}