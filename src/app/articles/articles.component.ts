import { Component } from '@angular/core';
import {Article} from "../_model/Article";
import {ArticleService} from "../_services/article.service";
import {Page} from "../_model/Page";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles?: Article[];
  page? : Page;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      response => {
        this.articles = response.content;
        this.page =  {
          pageNumber: 0,
          totalPages: 5
        }
      }
    )
  }

}
