import { FormularzTabelaService } from './../formularz-tabela.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Klient, KlientBinding } from 'src/app/fakturowanie/model/item';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.scss']
})

export class KlientComponent implements OnInit {

  public klientBinding: Klient[] = [];
  public klientForm: KlientBinding;
  klient: Klient;

  // @Output() messageEvent = new EventEmitter<Klient>();
  @Output() wyslijTabliceKlientow = new EventEmitter<Klient[]>();

  nowyKlient = new FormGroup({
    nazwa: new FormControl(''),
    nip: new FormControl(''),
    adresKlienta: new FormGroup({
      ulica: new FormControl(''),
      nrDom: new FormControl(''),
      nrMieszk: new FormControl(''),
      kod: new FormControl(''),
      miasto: new FormControl(''),
    })
  });
  // @Input()
  // public klient: Klient;
  constructor() { }

  ngOnInit() {
  }

  wprowadzDane(v: FormGroup) {

    this.klientForm = {
      nazwa: this.nowyKlient.get('nazwa').value,
      nip: this.nowyKlient.get('nip').value,
      ulica: this.nowyKlient.get('adresKlienta').get('ulica').value,
      nrDom: this.nowyKlient.get('adresKlienta').get('nrDom').value,
      nrMieszk: this.nowyKlient.get('adresKlienta').get('nrMieszk').value,
      kod: this.nowyKlient.get('adresKlienta').get('kod').value,
      miasto: this.nowyKlient.get('adresKlienta').get('miasto').value,
    };

    this.klient = {
      nazwa: this.klientForm.nazwa,
      nip: this.klientForm.nip,
      // tslint:disable-next-line:max-line-length
      adres: `${this.klientForm.ulica} ${this.klientForm.nrDom.toString()}/${this.klientForm.nrMieszk.toString()} ${this.klientForm.kod} ${this.klientForm.miasto}`
    };

    this.klientBinding.push({
      nazwa: this.klientForm.nazwa,
      nip: this.klientForm.nip,
      // tslint:disable-next-line:max-line-length
      adres: `${this.klientForm.ulica} ${this.klientForm.nrDom.toString()}/${this.klientForm.nrMieszk.toString()} ${this.klientForm.kod} ${this.klientForm.miasto}`

    });
    console.log(this.klientBinding);
    // this.messageEvent.emit(this.klient);
    this.wyslijTabliceKlientow.next(this.klientBinding);
    localStorage.setItem('klientBinding', JSON.stringify(this.klientBinding));
    /* this.data.changeMessage({
      nazwa: this.klientForm.nazwa,
      nip: this.klientForm.nip,
      // tslint:disable-next-line:max-line-length
      adres: `${this.klientForm.ulica} ${this.klientForm.nrDom.toString()}/${this.klientForm.nrMieszk.toString()} ${this.klientForm.kod} ${this.klientForm.miasto}`
    }); */
  }


}
