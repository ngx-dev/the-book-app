import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
        title: [''],
        releaseDate: [''],
        thumbnailUrl: [''],
        synopsis: [''],
        author: [''],
        genres: [[]],
        editable: [false],
        deletable: [false],
        isComplete: [true],
    });

    constructor(
        private route: ActivatedRoute,
        private bookService: BooksService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        const paramID = this.route.snapshot.paramMap.get('id');
        const bookID = Number(paramID);

        if (bookID) {
            this.getBook(bookID);
        } else {
            this.router.navigateByUrl('/');
        }
    }

    ngOnInit(): void {
    }

    getBook(id: number) {
        const book = this.bookService.getBook(id);
        if (book) {
            if (!book.isComplete) {
                this.router.navigate(['/new', book.id]);
            } else {
                this.setFormValue(book);
            }
        } else {
            this.router.navigateByUrl('/');
        }
    }

    setFormValue(book: Book) {
        this.form.patchValue(book);
        console.log(this.form.value);

    }

}
