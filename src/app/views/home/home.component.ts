import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    searchForm = new FormGroup({});

    constructor(public bookService: BooksService) {
        this.bookService.getBooks();
        this.searchForm = this.bookService.searchForm;
    }

    ngOnInit(): void { }

    get filteredBooks() { return this.bookService.filteredBooks }
    get term() { return this.searchForm.value.term }

}
