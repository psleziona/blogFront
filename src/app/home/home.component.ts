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
  comments: Comment[] = [
    {
      idComment: 1
    },
    {
      idComment: 2
    }
  ];

  articles: Article[] = [
    {
      idArticle: 1,
      title: 'Article 1',
      comments: this.comments
    },
    {
      idArticle: 2,
      title: 'Article 2',
      comments: this.comments
    },
    {
      idArticle: 3,
      title: 'Article 3',
      comments: this.comments
    },
    {
      idArticle: 4,
      title: 'Article 4',
      comments: this.comments
    },
    {
      idArticle: 5,
      title: 'Article 5',
      comments: this.comments
    },
    {
      idArticle: 6,
      title: 'Article 6',
      comments: this.comments
    },
    {
      idArticle: 7,
      title: 'Article 7',
      comments: this.comments
    }
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => this.articles=articles);
  }
}
