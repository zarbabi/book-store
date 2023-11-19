import {Component, Input} from '@angular/core';
import {News} from "../../../shared/models/news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
@Input({required: true})
  data!: News;
}
