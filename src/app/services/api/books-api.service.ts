import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BooksApiService {

    step = 10;

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        // return this.http.get<Book[]>('assets/data/books.json').pipe(map(book => book.splice(0, this.step)));
        return this.http.get<Book[]>('assets/data/books.json');
    }
}
