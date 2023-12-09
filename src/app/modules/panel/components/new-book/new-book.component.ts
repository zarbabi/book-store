import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../../store/services/books.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  bookForm: FormGroup;

  constructor(private booksService: BooksService, fb: FormBuilder) {
    this.bookForm = fb.group({
      title: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      author: [],
      description: []

    })
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
