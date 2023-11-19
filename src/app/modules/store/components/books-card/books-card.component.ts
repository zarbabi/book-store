import {Component, Input} from '@angular/core';
import {Book} from "../../../shared/models/book";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss']
})
export class BooksCardComponent {
  @Input({required: true})
  data!: Book;

  constructor( public basketService:BasketService) {
  }
}
