import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() item: Book | undefined;
    @Input() index: number = 0;

    constructor(private bookService: BooksService, private router: Router) { }

    ngOnInit() {
    }

    getImage(url: string | undefined): string {
        const defaultImage = '/assets/images/book-image.jpg';
        return `url(${url ? url : defaultImage})`;
    }

    deleteBook(bookID: number) {
        if (window.confirm('Are sure you want to << DELETE >> this book ?')) {
            this.bookService.deleteBook(bookID);
        }
    }

    goToEdit(bookID: number) {
        this.router.navigate(['/edit-book', bookID])
    }

}
