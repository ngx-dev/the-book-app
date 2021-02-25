import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }

    get isAdmin(): boolean { return this.auth.userIsAdmin };
    toggleUser = () => this.auth.toggleUser();

}
