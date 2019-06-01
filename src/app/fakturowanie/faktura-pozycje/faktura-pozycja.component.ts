import { FakturaPozycja, FakturaPozycjaFabryka} from '../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faktura-pozycja',
  templateUrl: './faktura-pozycja.component.html',
  styleUrls: ['./faktura-pozycja.component.scss']
})
export class FakturaPozycjaComponent implements OnInit {
  private pozycje: FakturaPozycja[] = [];
  private fakturaPozycjaFabryka: FakturaPozycjaFabryka;

  constructor() {
    this.fakturaPozycjaFabryka = new FakturaPozycjaFabryka();
  }

  ngOnInit() {
  }
  dodajPozycje(): void {
    this.pozycje.push(this.fakturaPozycjaFabryka.nowaFakturaPozycja());
    console.log(this.pozycje);
  }
  usunPozycje(pozycja: FakturaPozycja): void {
    this.pozycje = this.pozycje.filter(p => p !== pozycja);
    console.log(pozycja);
  }

}
