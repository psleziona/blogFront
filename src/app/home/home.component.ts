import { Component, OnInit } from '@angular/core';
import {Article} from "../Article";
import {Comment} from "../Comment";
import {ArticleService} from "../_services/article.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Article[] | undefined;
  constructor(private articleService: ArticleService, private authService: AuthService) {}

  ngOnInit() {
    // this.authService.login();
    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles.content;
      });
  }
}
