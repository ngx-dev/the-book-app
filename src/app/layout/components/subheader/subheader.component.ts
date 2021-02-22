import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
    selector: 'app-subheader',
    templateUrl: './subheader.component.html',
    styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

    search = new FormGroup({});

    constructor(public bookService: BooksService) {
        this.search = this.bookService.searchForm;
    }

    ngOnInit(): void {
    }

    get filteredBooksCount() { return this.bookService.filteredBooksCount; }
    get booksCount() { return this.bookService.books?.length || 0; }

}
