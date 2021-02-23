import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from '@techiediaries/ngx-autosize';


@NgModule({
    declarations: [EditBookComponent],
    imports: [
        CommonModule,
        EditBookRoutingModule,
        ReactiveFormsModule,
        AutosizeModule
    ]
})
export class EditBookModule { }
