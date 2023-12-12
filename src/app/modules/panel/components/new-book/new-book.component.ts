import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../shared/models/book";
import {BooksService} from "../../../store/services/books.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

  bookForm: FormGroup;
  id: number | null = null;

  constructor(private booksService: BooksService, fb: FormBuilder, router: ActivatedRoute) {
    this.bookForm = fb.group({
      title: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      author: [],
      description: []

    })

    router.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        booksService.getBook(this.id!).subscribe(item => {
          if (item == undefined) {
            alert('Book not found');
            return;
          }
          this.bookForm.patchValue(item);
        })
      }
    })
  }


  onSubmit() {
    if (this.bookForm.invalid) {
      alert('please fill the form');
      return;
    }


    if (!this.id) {
      let book: Book = {
        id: this.booksService.generateNewId(),
        title: this.bookForm.value.title!,
        description: this.bookForm.value.description,
        price: this.bookForm.value.price!,
        author: this.bookForm.value.author,
        image: ''
      };
      this.booksService.addBook(book);
    } else {
      this.booksService.editBook(this.id, this.bookForm.value);
    }


    this.bookForm.reset();
  }
}
