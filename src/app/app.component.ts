import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listNews: any[] = [];
  loading = false;

  constructor(private _newsService: NewsService) {}

  searchNews(para: any) {
    this.loading = true;
    this.listNews = [];

    setTimeout(() => {
      this._newsService.getNews(para).subscribe(
        (data) => {
          this.loading = false;
          this.listNews = data.articles;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
