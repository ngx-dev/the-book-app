import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStyleDirective } from './input-style.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [InputStyleDirective],
    exports: [InputStyleDirective],
})
export class DirectivesModule { }
