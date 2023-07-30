import {Component, inject} from '@angular/core';
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ImagesService} from "../_services/images.service";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article$: Observable<Article>;
  article: Article | undefined;
  img: any;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private articleService: ArticleService, private imageService: ImagesService) {}

  ngOnInit() {
    const idArticle =  Number(this.route.snapshot.params['id']);
    this.article$ = this.articleService.getArticle(idArticle);
    // this.articleService.getArticle(idArticle).subscribe(
    //   article => {
    //     this.article = article;
    //     this.getArticleImage(article.image);
    //   }
    // )
  }

  getArticleImage(fileName: String) {
    if(this.article?.image != '') {
      this.imageService.getImage(fileName).subscribe(
        img => this.img = URL.createObjectURL(img)
      )
    } else
      this.img = 'https://placehold.co/1000x300';
  }

}
