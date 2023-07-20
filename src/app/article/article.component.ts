import {Component, inject} from '@angular/core';
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: Article | undefined;
  img? :SafeResourceUrl;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) {
    const idArticle =  Number(this.route.snapshot.params['id']);
    this.articleService.getArticle(idArticle).subscribe(
      article => {
        this.article = article;
        this.img = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.article?.image}`);
      }
    )

  }

}
