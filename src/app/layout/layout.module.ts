import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavItemComponent } from './components/sidenav/nav-item/nav-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipe } from 'ng2-search-filter';

@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        SidenavComponent,
        NavItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    providers: [
        Ng2SearchPipe
    ]
})
export class LayoutModule { }
