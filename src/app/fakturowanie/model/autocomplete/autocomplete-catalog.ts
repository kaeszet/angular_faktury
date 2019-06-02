import { Autocomplete } from './autocomplete';
import { Observable } from 'rxjs';

export abstract class AutocompleteCatalog {
    abstract items(query: string): Observable<Autocomplete[]>;
}
