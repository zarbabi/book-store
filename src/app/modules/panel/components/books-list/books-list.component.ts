import {Component} from '@angular/core';
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../../store/services/books.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  books$: Observable<Book[]>;

  constructor(booksService: BooksService) {
    this.books$ = booksService.getLastBooks();
  }
}
