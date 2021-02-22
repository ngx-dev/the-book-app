import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) { }
    ngOnInit() {

        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         window.scrollTo(0, 0)
        //     }
        //     return;
        // });

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const route = this.getChild(this.activatedRoute);
            route.data.subscribe((data: { title: string; }) => {
                this.titleService.setTitle(data.title);
                // Subheader with page name
                window.scrollTo(0, 0);
            });
        });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }

    }
}
