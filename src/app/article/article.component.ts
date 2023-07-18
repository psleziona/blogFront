import {Component, inject} from '@angular/core';
import {ArticleService} from "../_services/article.service";
import {Article} from "../Article";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: Article | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private articleService: ArticleService) {
    const idArticle =  Number(this.route.snapshot.params['id']);
    this.articleService.getArticle(idArticle).subscribe(
      article => this.article = article
    )
  }

}
