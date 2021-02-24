import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookRoutingModule } from './new-book-routing.module';
import { NewBookComponent } from './new-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardStateComponent } from './components/wizard-state/wizard-state.component';

@NgModule({
    declarations: [NewBookComponent, WizardStateComponent],
    imports: [
        CommonModule,
        NewBookRoutingModule,
        ReactiveFormsModule
    ]
})
export class NewBookModule { }
