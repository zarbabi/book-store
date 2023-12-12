import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PanelLayoutComponent} from './components/panel-layout/panel-layout.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {NewBookComponent} from './components/new-book/new-book.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: PanelLayoutComponent,
    children: [
      {path: 'books', component: BooksListComponent},
      {path: 'books/new', component: NewBookComponent},
      {path: 'books/:id', component: NewBookComponent},
    ]
  }
];

@NgModule({
  declarations: [
    PanelLayoutComponent,
    BooksListComponent,
    NewBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule],


  exports: [RouterModule]
})
export class PanelModule {
}
