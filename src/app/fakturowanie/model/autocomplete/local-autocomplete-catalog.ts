import { Autocomplete } from './autocomplete';
import { Observable, of } from 'rxjs';

export class LocalAutocompleteCatalog {
    private dostepnePozycje: Autocomplete[] = [
        {nazwa: 'Programowanie Hello Worldów w 200 językach w 15 minut'},
        {nazwa: 'Hello World na milion sposobów'},
        {nazwa: 'Hello World dla bystrzaków'}
    ];
    items(query: string): Observable<Autocomplete[]> {
        return of(this.dostepnePozycje.filter(i => i.nazwa.includes(query))
        );
    }
}


