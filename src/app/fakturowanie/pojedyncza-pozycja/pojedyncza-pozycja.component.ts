import { Autocomplete } from './../model/autocomplete/autocomplete';
import { PrzelicznikCeny, CenaPozycji } from './../model/przelicznik-ceny/przelicznik-ceny';
import { FakturaPozycja, Jednostka, Podatek } from './../model/item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AutocompleteCatalog } from '../model/autocomplete/autocomplete-catalog';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, tap, map, retry, filter} from 'rxjs/operators';

interface AutocompleteSuggestion {
  name: string;
  label: string;
}


@Component({
  selector: 'app-pojedyncza-pozycja',
  templateUrl: './pojedyncza-pozycja.component.html',
  styleUrls: ['./pojedyncza-pozycja.component.scss']
})
export class PojedynczaPozycjaComponent implements OnInit {

  readonly czasOczekiwaniaPrzedSzukaniem = 400;
  readonly minimalnyRozmiarQuery = 3;

  @Input()
  public pozycja: FakturaPozycja;
  @Input()
  public lp: number;

  public dostepneJednostki: Jednostka[] = [
    Jednostka.sztuka,
    Jednostka.godzina,
    Jednostka.usluga
  ];
  public dostepneStawkiPodatku: Podatek[] = [
    Podatek.podat_23,
    Podatek.podat_8,
    Podatek.podat_5
  ];
  @Output()
  private pozycjaUsunieta: EventEmitter<FakturaPozycja> = new EventEmitter<FakturaPozycja>();
  @Output()
  private pozycjaZmieniona: EventEmitter<FakturaPozycja> = new EventEmitter();
  private szukajQuery = new Subject<string>();
  private szukajWynik = this.szukajQuery.pipe(
    debounceTime(this.czasOczekiwaniaPrzedSzukaniem),
    filter(q => q.length >= this.minimalnyRozmiarQuery),
    switchMap( q => this.autoCompletesCatalog.items(q)),
    map(data => this.zmianaFormatu(data)),
    tap(data => console.log(data)),
    retry(3)

  );

  sugestie: AutocompleteSuggestion[] = [];

  constructor(
    private przelicznikCeny: PrzelicznikCeny,
    private autoCompletesCatalog: AutocompleteCatalog
  ) {}

  ngOnInit() {
   this.pozycja.podatek = Podatek.podat_23;
   this.szukajWynik.subscribe((items) => {
      this.sugestie = items;
    });

  }
  usunPozycje(): void {
    this.pozycjaUsunieta.next(this.pozycja);
  }

  private zaktualizujWZaleznosciOdWyniku(wynik: CenaPozycji) {
    this.pozycja.brutto = wynik.brutto;
    this.pozycja.netto = wynik.netto;
    this.pozycjaZmieniona.next(this.pozycja);
  }

  przechwycZmianeBrutto(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: null,
      brutto: this.pozycja.brutto,
      podatek: this.pozycja.podatek
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }

  przechwycZmianeNetto(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: this.pozycja.netto,
      brutto: null,
      podatek: this.pozycja.podatek
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }

  przechwycZmianePodatku(): void {
    const wynik = this.przelicznikCeny.oblicz({
      netto: this.pozycja.netto,
      brutto: this.pozycja.brutto,
      podatek: this.pozycja.podatek,
    });
    this.zaktualizujWZaleznosciOdWyniku(wynik);
  }

  przechwycAutocomplete($event: any): void {
    this.szukajQuery.next($event.target.value);
  }

  zmianaFormatu(data: Autocomplete[]): AutocompleteSuggestion[] {
    return data.map( i => {
      return {
        name: i.nazwa,
        label: i.nazwa
      };
    });
  }

  wyborSugestii(item: AutocompleteSuggestion): void {
    this.pozycja.nazwa = item.name;
    this.sugestie = [];
  }
}
