import { Component, OnInit, Input } from '@angular/core';
import { Faktura, FakturaPodsumowanie } from '../model/item';

@Component({
  selector: 'app-faktura-podsumowanie',
  templateUrl: './faktura-podsumowanie.component.html',
  styleUrls: ['./faktura-podsumowanie.component.scss']
})
export class FakturaPodsumowanieComponent implements OnInit {
  @Input()
  podsumowanie: FakturaPodsumowanie;

  constructor() { }

  ngOnInit() {
  }

}
