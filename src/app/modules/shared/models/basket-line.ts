import {Book} from "./book";

export interface BasketLine {
  bookId: number;
  count: number;
}

export type BasketItem = BasketLine & { book: Book };
