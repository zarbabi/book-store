import {Injectable} from '@angular/core';
import {Book} from "../../shared/models/book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {
  }

  books: Book[] = [
    {id: 1, title: 'book1', description: 'des 1'},
    {id: 2, title: 'book2', description: 'des 2'},
    {id: 3, title: 'book3', description: 'des 3'},
    {id: 4, title: 'book4', description: 'des 4'}
  ]

  getLastBooks(count:number=4):Book[]{
    return this.books.slice(0,count) ;
  }

  getBook(id:number):Book | undefined {
    return this.books.find(x=>x.id==id) ;
  }
}
