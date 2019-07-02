import { KlientBinding, Klient } from './../fakturowanie/model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FormularzTabelaService {

  private messageSource = new BehaviorSubject<Klient>({
    nazwa: '',
    nip: '',
    adres: ''
  });
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: Klient) {
    this.messageSource.next(message);
  }

}
