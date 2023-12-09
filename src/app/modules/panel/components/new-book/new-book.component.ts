import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../../store/services/books.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private booksService: BooksService) {
  }

  onSubmit() {

    if (this.bookForm.invalid) {
      alert('please fill the form');
      return;
    }

    let book: Book = {
      id: this.booksService.generateNewId(),
      title: this.bookForm.value.title!,
      description: this.bookForm.value.description,
      price: this.bookForm.value.price!,
      author: this.bookForm.value.author,
      image: ''
    };
    this.booksService.addBook(book);
    this.bookForm.reset();
  }
}
