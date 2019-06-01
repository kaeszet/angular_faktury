export interface FakturaPozycja {
    nazwa: string;
    ilosc: number;
    jednostka?: Jednostka;
    netto?: number;
    podatek?: Podatek;
    brutto?: number;
}

export enum Jednostka {
    usluga = 'usł.',
    sztuka = 'szt.',
    godzina = 'rbh'
}

export enum Podatek {
    podat_23 = 0.23,
    podat_8 = 0.08,
    podat_5 = 0.05
}

export class FakturaPozycjaFabryka {
    nowaFakturaPozycja(): FakturaPozycja {
        return {
            nazwa: '',
            ilosc: 1,
            jednostka: null,
            netto: null,
            podatek: null,
            brutto: null

        };
    }
}
