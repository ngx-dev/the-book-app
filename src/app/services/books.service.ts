import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksApiService } from 'src/app/services/api/books-api.service';
import { first } from 'rxjs/operators';
import { Ng2SearchPipe } from 'ng2-search-filter';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    // searchTerm: BehaviorSubject<string> = new BehaviorSubject('');
    searchForm = new FormGroup({});

    books: Book[] | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private booksApi: BooksApiService,
        private filterPipe: Ng2SearchPipe
    ) {
        this.searchForm = this.formBuilder.group({
            term: [''],
        });
    }

    getBooks() {
        this.booksApi.getBooks()
            .pipe(first())
            .subscribe(
                data => this.books = data
            );
    }

    get filteredBooks(): Book[] | undefined {
        return this.filterPipe.transform(this.books, this.searchForm.value.term);
    }


    // setSearchTerm(term: string): void {
    //     this.searchTerm.next(term);
    // }

    // getSearchTerm(): Observable<string> {
    //     return this.searchTerm.asObservable();
    // }

}
