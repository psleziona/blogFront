import { Component, OnInit } from '@angular/core';
import {Article} from "../Article";
import {Comment} from "../Comment";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[] | undefined;
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles.content;
      });
  }
}
