import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookRoutingModule } from './edit-book-routing.module';
import { EditBookComponent } from './edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from '@techiediaries/ngx-autosize';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
    declarations: [EditBookComponent],
    imports: [
        CommonModule,
        EditBookRoutingModule,
        ReactiveFormsModule,
        AutosizeModule,
        DirectivesModule
    ]
})
export class EditBookModule { }
