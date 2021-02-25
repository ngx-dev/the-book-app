import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userIsAdmin = false;

    constructor() { }

    toggleUser = () => this.userIsAdmin = !this.userIsAdmin;

}
