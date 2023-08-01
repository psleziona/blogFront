import { Component } from '@angular/core';
import {Article} from "../_model/Article";
import {ArticleService} from "../_services/article.service";
import {Page} from "../_model/Page";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles$: Observable<Article[]>;
  page? : Page;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles().pipe(
      map((x:any) => x.content)
    );
  }
}
