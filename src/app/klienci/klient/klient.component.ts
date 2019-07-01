import { Component, OnInit, Input } from '@angular/core';
import { Klient, KlientBinding } from 'src/app/fakturowanie/model/item';
import { FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.scss']
})

export class KlientComponent implements OnInit {

  @Input()
  public klientBinding: Klient[] = [];
  public klientForm: KlientBinding;
  public klient: Klient;

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
    console.log(this.klientForm.nazwa);
    console.log(this.klientForm.miasto);

    this.klientBinding.push({
      nazwa: this.klientForm.nazwa,
      nip: this.klientForm.nip,
      // tslint:disable-next-line:max-line-length
      adres: `${this.klientForm.ulica} ${this.klientForm.nrDom.toString()}/${this.klientForm.nrMieszk.toString()} ${this.klientForm.kod} ${this.klientForm.miasto}`

    });
    console.log(this.klientBinding);
  }

}
