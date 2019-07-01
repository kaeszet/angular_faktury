export interface FakturaPodsumowanie {
    netto: number;
    brutto: number;
    podatek: number;
}
export interface Klient {
    nazwa: string;
    adres: string;
    nip: string;
}
export interface KlientBinding {
    nazwa: string;
    nip: string;
    ulica: string;
    nrDom: number;
    nrMieszk: number;
    kod: string;
    miasto: string;
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
    rabat?: Rabat;
    netto_rabat?: number;
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
export enum Rabat {
    rabat_0 = 0.0,
    rabat_05 = 0.05,
    rabat_1 = 0.1,
    rabat_15 = 0.15,
    rabat_2 = 0.2,
    rabat_25 = 0.25,
    rabat_3 = 0.3,
}

export class FakturaPozycjaFabryka {
    nowaFakturaPozycja(): FakturaPozycja {
        return {
            id: uuid(),
            nazwa: '',
            ilosc: 1,
            jednostka: null,
            netto: null,
            rabat: null,
            netto_rabat: null,
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
