import {Component} from '@angular/core';
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../services/books.service";
import {of} from "rxjs";

@Component({
  selector: 'app-books-segment',
  templateUrl: './books-segment.component.html',
  styleUrls: ['./books-segment.component.scss']
})
export class BooksSegmentComponent {
  books$ = of([] as Book[]);

  constructor(private bookServices: BooksService) {
    this.books$ = bookServices.getLastBooks(4);
  }


}
