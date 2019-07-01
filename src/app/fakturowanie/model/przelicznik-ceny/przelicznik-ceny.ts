import { ZadanieObliczenia } from './przelicznik-ceny';
import { Podatek, Rabat } from './../item';

export interface CenaPozycji {
    netto: number;
    rabat: Rabat;
    netto_rabat: number;
    podatek: Podatek;
    brutto: number;
    wartoscPodatku: number;
}

export interface ZadanieObliczenia {
    netto?: number;
    rabat: Rabat;
    netto_rabat?: number;
    brutto?: number;
    podatek: Podatek;
}

export class NotEnoughParamsError extends TypeError {
}

export class PrzelicznikCeny {
    oblicz(zadanieObliczenia: ZadanieObliczenia): CenaPozycji {
        if (zadanieObliczenia.netto != null) {
            const nettoRabat = this.obliczNettoRabat(zadanieObliczenia);
            zadanieObliczenia.netto_rabat = nettoRabat;
            const brutto = this.obliczBrutto(zadanieObliczenia);
            const wartoscPodatku = brutto - zadanieObliczenia.netto_rabat;
            console.log(wartoscPodatku);
            return {
                netto: zadanieObliczenia.netto,
                rabat: zadanieObliczenia.rabat,
                netto_rabat: nettoRabat,
                podatek: zadanieObliczenia.podatek,
                brutto,
                wartoscPodatku
            };
        }
        if (zadanieObliczenia.brutto != null) {
            const nettoRabat = this.obliczNetto(zadanieObliczenia);
            zadanieObliczenia.netto_rabat = nettoRabat;
            const netto = this.obliczNettoZNR(zadanieObliczenia);
            const wartoscPodatku = this.pobierzWartoscPodatku(zadanieObliczenia.brutto, nettoRabat);
            console.log(wartoscPodatku);
            return {
                netto,
                rabat: zadanieObliczenia.rabat,
                netto_rabat: nettoRabat,
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
        return this.zaokr(zadanieObliczenia.netto_rabat + (zadanieObliczenia.netto_rabat * zadanieObliczenia.podatek), 2);
    }
    private obliczNetto(zadanieObliczenia: ZadanieObliczenia): number {
        return this.zaokr(zadanieObliczenia.brutto / (1 + zadanieObliczenia.podatek), 2);
    }
    private obliczNettoRabat(zadanieObliczenia: ZadanieObliczenia): number {
        return this.zaokr(zadanieObliczenia.netto * (1 - zadanieObliczenia.rabat), 2);
    }
    private obliczNettoZNR(zadanieObliczenia: ZadanieObliczenia): number {
        return this.zaokr(zadanieObliczenia.netto_rabat / (1 - zadanieObliczenia.rabat), 2);
    }
    private pobierzWartoscPodatku(brutto: number, nettoRabat: number): number {
        return this.zaokr(brutto - nettoRabat, 2);
    }
}
