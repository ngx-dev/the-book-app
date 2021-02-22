import { Component, OnInit } from '@angular/core';
import { BooksApiService } from 'src/app/services/api/books-api.service';
import { Book } from '../../models/book';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    books: Book[] | undefined;

    constructor(private booksApi: BooksApiService) {
        this.booksApi.getBooks()
            .pipe(first())
            .subscribe(
                data => this.books = data
            );
        // console.log(this.books);

    }

    ngOnInit(): void {

    }

}
