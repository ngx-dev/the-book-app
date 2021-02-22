import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CardModule,
        Ng2SearchPipeModule
    ]
})
export class HomeModule { }
