import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelPageComponent} from './components/panel-page/panel-page.component';
import {RouterModule, Routes} from "@angular/router";
import {PanelLayoutComponent} from './components/panel-layout/panel-layout.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {NewBookComponent} from './components/new-book/new-book.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: PanelPageComponent,
    children: [
      {path: 'books', component: BooksListComponent},
      {path: 'new', component: NewBookComponent}
    ]
  }
];

@NgModule({
  declarations: [
    PanelPageComponent,
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
