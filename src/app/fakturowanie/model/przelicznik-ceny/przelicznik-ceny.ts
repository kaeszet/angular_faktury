import { Podatek } from './../item';

export interface CenaPozycji {
    netto: number;
    podatek: Podatek;
    brutto: number;
    wartoscPodatku: number;
}

export interface ZadanieObliczenia {
    netto?: number;
    brutto?: number;
    podatek: Podatek;
}

export class NotEnoughParamsError extends TypeError {
}

export class PrzelicznikCeny {
    oblicz(zadanieObliczenia: ZadanieObliczenia): CenaPozycji {
        if (zadanieObliczenia.netto != null) {
            const brutto = this.obliczBrutto(zadanieObliczenia);
            const wartoscPodatku = brutto - zadanieObliczenia.netto;
            return {
                netto: zadanieObliczenia.netto,
                brutto,
                podatek: zadanieObliczenia.podatek,
                wartoscPodatku
            };
        }
        if (zadanieObliczenia.brutto != null) {
            const netto = this.obliczNetto(zadanieObliczenia);
            const wartoscPodatku = this.pobierzWartoscPodatku(zadanieObliczenia.brutto, netto);
            return {
                netto,
                brutto: zadanieObliczenia.brutto,
                podatek: zadanieObliczenia.podatek,
                wartoscPodatku
            };
        }
        throw new NotEnoughParamsError('Nie wprowadzono wymaganych parametrów do obliczeń');
    }
    private zaokr(cena: number, iloscZer: number): number {
        const zaokraglone = Number((Math.round(cena * 100) / 100).toFixed(iloscZer));
        return zaokraglone;
    }
    private obliczBrutto(zadanieObliczenia: ZadanieObliczenia): number {
        return this.zaokr(zadanieObliczenia.netto + (zadanieObliczenia.netto * zadanieObliczenia.podatek), 2);
    }
    private obliczNetto(zadanieObliczenia: ZadanieObliczenia): number {
        return this.zaokr(zadanieObliczenia.brutto / (1 + zadanieObliczenia.podatek), 2);
    }
    private pobierzWartoscPodatku(brutto: number, netto: number): number {
        return this.zaokr(brutto - netto, 2);
    }
}
