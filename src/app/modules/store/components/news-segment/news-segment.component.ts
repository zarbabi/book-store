import { Component } from '@angular/core';
import {News} from "../../../shared/models/news";
import {NewsHttpService} from "../../services/news-http.service";

@Component({
  selector: 'app-news-segment',
  templateUrl: './news-segment.component.html',
  styleUrls: ['./news-segment.component.scss']
})
export class NewsSegmentComponent {
  newses: News[] = [];

  constructor( newsHttpService: NewsHttpService) {
    newsHttpService.getLastNewses().subscribe(data => {
      this.newses = data.map(x => ({
        id: x.id,
        content: x.body,
        title: x.title,
        image: "https://www.soorban.com/images/news/2021/12/1639652514_E9zJ1.jpg",
        createdAt: '11-11-2023',
        price:200

      }))
    })
  }
}
