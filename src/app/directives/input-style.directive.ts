import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[inputStyle]'
})
export class InputStyleDirective {

    @HostBinding('class')
    elementClass = 'input';

    constructor() { }

}
