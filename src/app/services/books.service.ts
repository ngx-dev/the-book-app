import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksApiService } from 'src/app/services/api/books-api.service';
import { first } from 'rxjs/operators';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    books: Book[] = [];

    searchForm = new FormGroup({});

    genres = [
        'Open Source',
        'Mobile',
        'Java',
        'Web Development',
        'Internet',
        'Miscellaneous',
        'Microsoft',
        'Next Generation Databases',
        'Programming',
        'Software Engineering',
        'Networking',
        'Theory',
        'Microsoft .NET',
        'Python',
        'Business',
        'Other'
    ];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private booksApi: BooksApiService,
        private filterPipe: Ng2SearchPipe
    ) {
        this.searchForm = this.formBuilder.group({
            term: [''],
        });
    }

    get filteredBooks(): Book[] {
        return this.filterPipe.transform(this.books, this.searchForm.value.term);
    }

    getBooks(): void {
        if (this.books.length) {
            return;
        }
        const BOOKS_DB = localStorage.getItem('BOOKS_DB');
        if (BOOKS_DB) {
            this.books = JSON.parse(BOOKS_DB);
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

    getBook(id: number): Book | undefined {
        if (!this.books?.length) {
            this.getBooks();
        }
        return this.books?.find(book => book.id === id);
    }

    deleteBook(id: number): void {
        const foundIndex = this.books.findIndex(b => b.id === id);
        this.books.splice(foundIndex, 1);
        this.saveToDB();
        this.showAlert('DELETED');
    }

    updateBook(book: Book): void {
        const foundIndex = this.books.findIndex(b => b.id === book.id);
        this.books[foundIndex] = book;
        this.saveToDB();
        this.router.navigateByUrl('/');
        this.showAlert('UPDATED');
    }

    addBook(book: Book): void {
        const bookExist = this.books?.find(b => b.id === book.id);
        if (bookExist) {
            this.updateBook(book);
        } else {
            let lastId = Number(this.books[this.books?.length - 1]?.id);
            book.id = this.books?.length ? ++lastId : 1;
            this.books?.push(book);
            this.saveToDB();
            this.router.navigateByUrl('/');
            this.showAlert('CREATED');
        }
    }

    saveToDB = () => localStorage.setItem('BOOKS_DB', JSON.stringify(this.books));

    showAlert(state: string): void {
        setTimeout(() => {
            window.alert(`Book < ${state} >`)
        }, 200);
    }
}
