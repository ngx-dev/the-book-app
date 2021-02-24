import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookComponent } from './new-book.component';

const routes: Routes = [{
    path: '',
    component: NewBookComponent,
},];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewBookRoutingModule { }
