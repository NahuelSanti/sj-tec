import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias!: Article[];
  constructor(private _noticias: NewsService) {}

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
    this._noticias.getNews().subscribe(
      (response) => {
        this.noticias = response.articles;
        // console.log('DataApiNews:>>', response);
        // console.log(this.noticias);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
