import { Component } from '@angular/core';
import {Book} from "../../../shared/models/book";
import {NewsHttpService} from "../../services/news-http.service";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-books-segment',
  templateUrl: './books-segment.component.html',
  styleUrls: ['./books-segment.component.scss']
})
export class BooksSegmentComponent {
books:Book[]=[];
constructor( bookServices:BooksService ) {
  this.books = bookServices.getLastBooks(4);
}
}
