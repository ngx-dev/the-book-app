import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() item: Book | undefined;

    constructor() { }

    ngOnInit() {
    }

    getImage(url: string | undefined): string {
        return `url(${url ? url : '/assets/images/book-image.jpg'})`;
    }

}
