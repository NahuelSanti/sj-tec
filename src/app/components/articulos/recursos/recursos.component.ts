import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss'],
  providers: [NewsService],
})
export class RecursosComponent implements OnInit {
  apiData: any;

  constructor(private _news: NewsService) {
    // this.getNewsData();
  }

  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this._news.getNews().subscribe(
      (response) => {
        console.log('Data de la api', response);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
