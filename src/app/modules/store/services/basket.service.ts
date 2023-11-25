import {Injectable} from '@angular/core';
import {BasketItem, BasketLine} from "../../shared/models/basket-line";
import {forkJoin, of, switchMap} from "rxjs";
import {BooksService} from "./books.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private bookService: BooksService) {
    if (localStorage.getItem('basket')) {
      this.basketLine = JSON.parse(localStorage.getItem('basket')!) as BasketLine[];
    }
  }

  basketLine: BasketLine[] = [];

  fetchBooks() {
    return forkJoin(this.all().map(basket => {
      return this.bookService.getBook(basket.bookId)
        .pipe(switchMap(book => of({...basket, book} as BasketItem)));
    }));
  }

  add(bookId: number) {
    const existBook = this.basketLine.find(x => x.bookId == bookId);
    if (existBook) {
      existBook.count++;
    } else {
      this.basketLine.push({bookId, count: 1});
    }

    this.save();
  }

  addOne(bookId: number) {
    const countBook = this.basketLine.find(x => x.bookId == bookId)!;
    countBook.count++;

    this.save();
  }

  deleteOne(bookId: number) {
    const countBook = this.basketLine.find(x => x.bookId == bookId)!;
    if (countBook.count > 1) {
      countBook.count--;
    } else {
      this.delete(bookId);
    }
    this.save();
  }

  delete(bookId: number) {
    const index = this.basketLine.findIndex(x => x.bookId == bookId);
    this.basketLine.splice(index, 1);
    this.save();
  }

  all(): BasketLine[] {
    return this.basketLine;
  }

  count(): number {
    return this.basketLine.length;
  }

  save() {
    localStorage.setItem('basket', JSON.stringify(this.basketLine));
  }
}
