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

    BOOKS_DB = localStorage.getItem('BOOKS_DB');

    constructor(
        private formBuilder: FormBuilder,
        private booksApi: BooksApiService,
        private filterPipe: Ng2SearchPipe
    ) {
        this.searchForm = this.formBuilder.group({
            term: [''],
        });
    }

    get filteredBooks(): Book[] | undefined {
        return this.filterPipe.transform(this.books, this.searchForm.value.term);
    }

    getBooks() {
        if (this.BOOKS_DB) {
            this.books = JSON.parse(this.BOOKS_DB);
        } else {
            this.booksApi.getBooks()
                .pipe(first())
                .subscribe(
                    data => {
                        this.books = data;
                        this.saveToDB();
                    }
                );
        }
    }

    getBook(id: number) {
        if (!this.books) {
            this.getBooks();
        }
        return this.books?.find(book => book.id === id);
    }

    deleteBook(id: number) {
        this.books = this.books?.filter(book => book.id !== id);
        this.saveToDB();
    }

    saveToDB = () => localStorage.setItem('BOOKS_DB', JSON.stringify(this.books));


    // setSearchTerm(term: string): void {
    //     this.searchTerm.next(term);
    // }

    // getSearchTerm(): Observable<string> {
    //     return this.searchTerm.asObservable();
    // }

}
