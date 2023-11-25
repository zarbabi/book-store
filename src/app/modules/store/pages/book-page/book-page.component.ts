import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent {
  item?: Book;

  constructor(router: ActivatedRoute, booksService: BooksService) {

    router.params.subscribe(params => {
      const id = params['id'];
      booksService.getBook(id).subscribe(item => this.item = item);
    })
  }
}
