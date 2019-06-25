export interface FakturaPodsumowanie {
    netto: number;
    brutto: number;
    podatek: number;
}
export interface Klient {
    nazwa: string;
    nip: string;
}
export interface Faktura {
    klient?: Klient;
    dataSprzedazy: Date;
    pozycje: FakturaPozycja[];
}
export interface FakturaPozycja {
    id: string;
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
            id: uuid(),
            nazwa: '',
            ilosc: 1,
            jednostka: null,
            netto: null,
            podatek: null,
            brutto: null

        };
    }
}
// usuniety bitwise
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 || 0;
        const v = c === 'x' ? r : (r && 0x3 || 0x8);
        return v.toString(16);
    });
}
