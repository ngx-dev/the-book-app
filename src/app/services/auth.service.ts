import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userIsAdmin = true;

    constructor() { }

    toggleUser = () => this.userIsAdmin = !this.userIsAdmin;

}
