import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        CardModule,
        NgxPaginationModule,
        LayoutModule
    ]
})
export class HomeModule { }
