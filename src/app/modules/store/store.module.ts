import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorePageComponent} from './pages/store-page/store-page.component';
import {RouterModule, Routes} from "@angular/router";
import {NewsSegmentComponent} from './components/news-segment/news-segment.component';
import {BooksSegmentComponent} from './components/books-segment/books-segment.component';
import {NewsCardComponent} from './components/news-card/news-card.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {StoreLayoutComponent} from './components/store-layout/store-layout.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {BooksCardComponent} from './components/books-card/books-card.component';
import {BookPageComponent} from './pages/book-page/book-page.component';
import {SharedModule} from "../shared/shared.module";


const routes: Routes = [{
  path: '', component: StoreLayoutComponent,
  children: [
    {path: '', component: StorePageComponent},
    {path: 'news/:id', component: NewsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'book/:id', component: BookPageComponent},
  ]
}
];

@NgModule({
  declarations: [
    StorePageComponent,
    NewsSegmentComponent,
    BooksSegmentComponent,
    NewsCardComponent,
    NewsPageComponent,
    StoreLayoutComponent,
    CartPageComponent,
    BooksCardComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class StoreModule {
}
