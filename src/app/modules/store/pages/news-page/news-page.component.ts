import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsHttpService} from "../../services/news-http.service";
import {News} from "../../../shared/models/news";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  item: News | null = null;

  constructor(router: ActivatedRoute, newsService: NewsHttpService) {
    router.params.subscribe(params => {
      const id = params['id'];
      newsService.getNews(id).subscribe((value => {
        this.item = {
          id: value.id,
          title: value.title,
          content: value.body,
          image: 'https://www.soorban.com/images/news/2021/12/1639652514_E9zJ1.jpg',
          createdAt: '11-11-2023',
          price: 200
        }
      }))

    })
  }
}
