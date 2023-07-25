import {Component, inject} from '@angular/core';
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ImagesService} from "../_services/images.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: Article | undefined;
  img: any;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private articleService: ArticleService, private imageService: ImagesService) {}

  ngOnInit() {
    const idArticle =  Number(this.route.snapshot.params['id']);
    this.articleService.getArticle(idArticle).subscribe(
      article => {
        this.article = article;
        this.getArticleImage(article.image);
      }
    )
  }

  getArticleImage(fileName: String) {
    this.imageService.getImage(fileName).subscribe(
      img => this.img = URL.createObjectURL(img)
    )
  }

}
