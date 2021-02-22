import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/nav-item';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    items: NavItem[] = [
        {
            text: 'Home',
            icon: 'home',
            url: '/home'
        },
        {
            text: 'New Book',
            icon: 'add',
            url: '/new'
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
