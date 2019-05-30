import { FakturaPozycja } from './../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faktura-pozycja',
  templateUrl: './faktura-pozycja.component.html',
  styleUrls: ['./faktura-pozycja.component.scss']
})
export class FakturaPozycjaComponent implements OnInit {
  private positions: FakturaPozycja[] = [];

  constructor() { }

  ngOnInit() {
    this.positions.push({});
    this.positions.push({});
  }
  dodajPozycje(): void {
    this.positions.push({});
  }
  usunPozycje(position: FakturaPozycja): void {
    this.positions = this.positions.filter(p => p !== position);
  }

}
