import {Component, Input} from '@angular/core';
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../../store/services/books.service";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  // @Input({required: true})
  // data?: Book ;
  books$ = of([] as Book[]);
  constructor(booksService:BooksService,router:ActivatedRoute) {
    // router.params.subscribe(params => {
    //   const id = params['id'];
    //   booksService.getBook(id).subscribe(item => this.data = item);
    // })
    this.books$ = booksService.getLastBooks(4);
  }
}
