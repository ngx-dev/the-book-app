import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { AuthService } from 'src/app/services/auth.service';

const defaultImage = '/assets/images/book-image.jpg';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() item: Book | undefined;
    @Input() index: number = 0;

    constructor(
        private router: Router,
        private bookService: BooksService,
        private auth: AuthService
    ) { }

    ngOnInit() {
    }

    getImage(url: string | undefined): string {
        return `url(${url ? url : defaultImage})`;
    }

    deleteBook(bookID: number): void {
        if (window.confirm('Are sure you want to << DELETE >> this book ?')) {
            this.bookService.deleteBook(bookID);
        }
    }

    goToEdit(bookID: number): void {
        this.router.navigate(['/edit-book', bookID])
    }

    get isAdmin(): boolean { return this.auth.userIsAdmin };

}
