import {Component} from '@angular/core';
import {BasketItem} from "../../../shared/models/basket-line";
import {BasketService} from "../../services/basket.service";
import {of} from "rxjs";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  basketItems$ = of([] as BasketItem[]);


  constructor(public basketService: BasketService) {
    this.fetchBooks();
  }

  fetchBooks() {
    this.basketItems$ = this.basketService.fetchBooks();
  }

  delete(id: number) {
    this.basketService.delete(id);
    this.fetchBooks();
  }

  deleteBook(id: number) {
    this.basketService.deleteOne(id);
    this.fetchBooks();
  }

  addBook(id: number) {
    this.basketService.addOne(id);
    this.fetchBooks();
  }
}
