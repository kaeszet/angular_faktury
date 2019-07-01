import { Klient } from './../../fakturowanie/model/item';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-klienci-lista',
  templateUrl: './klienci-lista.component.html',
  styleUrls: ['./klienci-lista.component.scss']
})
export class KlienciListaComponent implements OnInit {

  @Input()
  public ID: number;
  public klient: Klient[];

  constructor() { }

  ngOnInit() {

  }


}
