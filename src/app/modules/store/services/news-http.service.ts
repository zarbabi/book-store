import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getLastNewses(count: number = 7): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${count}`)
  }

  getNews(id: number): Observable<Post> {
    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }


}

export interface Post {
  id: number;
  title: string;
  body: string;
}
