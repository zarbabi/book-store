import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../shared/models/book";
import {AddBookService} from "../../services/add-book.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  books:Book[]=[];
  currentId=5;
constructor(public addBookService :AddBookService) {
}
  bookForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    author: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  onSubmit(){
// this.addBookService.createBook(this.bookForm);
    const book:Book ={
      id:this.currentId++,
      title:'a',//this.bookForm.get("'title'"),
      description:'aaaaa',// this.bookForm.get("'description'"),
      price:100,//this.bookForm.get("'price'"),
      author:'a',//this.bookForm.get("'author'"),
      image:''
    }
    this.books.push(book);

  }
}
