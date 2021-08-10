import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(para: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      para.country +
      '&category=' +
      para.category +
      '&apiKey=588731edf7b04824ac9df4e3016d0d76';

    return this.http.get(URL);
  }
}
