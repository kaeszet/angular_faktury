import { HttpClient } from '@angular/common/http';
import { AutocompleteCatalog } from './autocomplete-catalog';
import { Observable, merge } from 'rxjs';
import { Autocomplete } from './autocomplete';
import { map, flatMap, mergeMap, concatMap} from 'rxjs/operators';

interface Book {
    volumeInfo: BookInfo;
}

interface BookInfo {
    title: string;
}

interface BooksResponse {
    items: Book[];
}

export class HttpAutocompleteCatalog extends AutocompleteCatalog {

    readonly ZRODLO_URL = 'https://www.googleapis.com/books/v1/volumes';

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    items(query: string): Observable<Autocomplete[]> {
        const queryUrl = `${this.ZRODLO_URL}?q=${query}`;

        return this.http.get<BooksResponse>(queryUrl).pipe(
            map(r => r.items),
            map(items => items.map(i => this.mapToItem(i)))
        );
    }
    mapToItem(i: Book): any {
        return {nazwa: i.volumeInfo.title};
    }
}
