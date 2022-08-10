import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasAPI } from './news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=f0b1b31a4990475c9ac5629cbccd3110

  apiKey: string = 'f0b1b31a4990475c9ac5629cbccd3110';
  baseUrl: string = 'https://newsapi.org/v2';
  typeCountry: string = 'ar';

  constructor(private _http: HttpClient) {}

  getNews(): Observable<NoticiasAPI> {
    let params = new HttpParams().set('apiKey', this.apiKey);

    return this._http.get<NoticiasAPI>(
      this.baseUrl + '/top-headlines?country=' + this.typeCountry,
      { params: params }
    );
  }
}
