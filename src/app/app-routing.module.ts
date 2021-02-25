import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./views/home/home.module').then(m => m.HomeModule),
                data: { title: 'TBA | Home' }
            },
            {
                path: 'edit-book/:id',
                loadChildren: () =>
                    import('./views/edit-book/edit-book.module').then(m => m.EditBookModule),
                data: { title: 'TBA | Edit Book' }
            },
            {
                path: 'new-book',
                loadChildren: () =>
                    import('./views/new-book/new-book.module').then(m => m.NewBookModule),
                data: { title: 'TBA | New Book' }
            },
            {
                path: 'new-book/:id',
                loadChildren: () =>
                    import('./views/new-book/new-book.module').then(m => m.NewBookModule),
                data: { title: 'TBA | Edit Book' }
            },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
