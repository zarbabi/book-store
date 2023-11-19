import { Component } from '@angular/core';
import {News} from "../../../shared/models/news";

@Component({
  selector: 'app-news-segment',
  templateUrl: './news-segment.component.html',
  styleUrls: ['./news-segment.component.scss']
})
export class NewsSegmentComponent {
newses : News[]=[
  {id:1,
  title:'news 1',
  content:'',
  image:"https://www.soorban.com/images/news/2021/12/1639652514_E9zJ1.jpg",
  createdAt:'11-11-2023'},
  {id:2,
    title:'news 2',
    content:'',
    image:"https://www.soorban.com/images/news/2021/12/1639652514_E9zJ1.jpg",
    createdAt:'11-11-2023'}
];
}
