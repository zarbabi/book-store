import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePageComponent } from './pages/store-page/store-page.component';
import {RouterModule, Routes} from "@angular/router";
import { NewsSegmentComponent } from './components/news-segment/news-segment.component';
import { BooksSegmentComponent } from './components/books-segment/books-segment.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes:Routes=[
  {path:'' ,component:StorePageComponent},
  {path:'news/:id' ,component:NewsPageComponent}
]

@NgModule({
  declarations: [
    StorePageComponent,
    NewsSegmentComponent,
    BooksSegmentComponent,
    NewsCardComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
