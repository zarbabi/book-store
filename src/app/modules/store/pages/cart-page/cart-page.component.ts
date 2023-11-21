import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsHttpService} from "../../services/news-http.service";
import {BasketLine} from "../../../shared/models/basket-line";
import {BasketService} from "../../services/basket.service";
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  lines:BasketLine [] ;

  constructor(public basketService:BasketService,private bookService:BooksService) {
   this.lines= basketService.all();
  }

  delete(id:number){
    this.basketService.delete(id);
  }

  getBook(id:number):Book{
    return this.bookService.getBook(id)!;
  }

  deleteBook(id:number){
   return this.basketService.deleteOne(id);
  }
  addedBook(id:number){
    return this.basketService.addedOne(id);
  }
}
