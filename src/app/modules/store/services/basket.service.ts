import {Injectable} from '@angular/core';
import {BasketLine} from "../../shared/models/basket-line";
import {count} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() {
  }

  basketLine: BasketLine[] = [];

  add(bookId: number) {
    const existBook = this.basketLine.find(x => x.bookId == bookId);
    if (existBook)
      existBook.count++;
    else
      this.basketLine.push({bookId, count: 1});
  }

  delete(bookId: number) {
    const index = this.basketLine.findIndex(x => x.bookId == bookId);
    this.basketLine.splice(index, 1);
  }

  all(): BasketLine[] {
    return this.basketLine;
  }
  count():number{
    return this.basketLine.length;
  }
}
