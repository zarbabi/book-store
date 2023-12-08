import {Injectable, Input} from '@angular/core';
import {Book} from "../../shared/models/book";

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  books:Book[]=[];
  currentId=5;

  public createBook(){
    // const book:Book ={
    //   id:this.currentId++,
    //   title:title,
    //   description: description,
    //   price:price,
    //   author:author,
    //   image:image
    // }
    this.books.push();

  }
  constructor() { }
}
