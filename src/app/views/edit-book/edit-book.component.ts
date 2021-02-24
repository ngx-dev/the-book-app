import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

    form = this.formBuilder.group({
        id: [0],
        title: ['', Validators.required],
        releaseDate: ['', Validators.required],
        thumbnailUrl: [''],
        synopsis: ['', Validators.required],
        author: ['', Validators.required],
        genres: [[], Validators.required],
        editable: [false],
        deletable: [false],
        isComplete: [true],
    });

    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private route: ActivatedRoute,
        private bookService: BooksService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        const paramID = this.route.snapshot.paramMap.get('id');
        const bookID = Number(paramID) || 0;

        if (bookID) this.getBook(bookID);
    }

    ngOnInit(): void {
    }

    get genres() { return this.bookService.genres }

    getBook(id: number) {
        const book = this.bookService.getBook(id);
        if (book) {
            if (!book.isComplete) {
                this.router.navigate(['/new-book', book.id]);
            } else {
                this.setFormValue(book);
            }
        } else {
            this.goHome();
        }
    }

    setFormValue(book: Book) {
        book.releaseDate = this.transformDate(book.releaseDate); // Correct format date applied
        this.form.patchValue(book);
    }

    transformDate(date: string) {
        return formatDate(date, 'yyyy-MM-dd', this.locale);
    }

    submitForm() {
        if (this.form.valid) {
            this.bookService.updateBook(this.form.value)
        }
    }

    goHome = () => this.router.navigateByUrl('/')

}
