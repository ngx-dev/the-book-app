import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BooksApiService {

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>('assets/data/books.json');
    }
}
