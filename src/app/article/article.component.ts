import {Component, inject} from '@angular/core';
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";
import {Comment} from "../_model/Comment";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ImagesService} from "../_services/images.service";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {map, Observable, tap} from "rxjs";
import {CommentsService} from "../_services/comments.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article$: Observable<Article>;
  articleComments$: Observable<Comment[]>
  img: any;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private articleService: ArticleService,
    private imageService: ImagesService,
    private commentService: CommentsService
    ) {}

  ngOnInit() {
    const idArticle =  Number(this.route.snapshot.params['id']);
    this.article$ = this.articleService.getArticle(idArticle).pipe(
      map(article => {
        this.getArticleImage(article.image);
        return article;
      })
    );

    this.articleComments$ = this.commentService.getArticleComments(idArticle)
      .pipe(
        map(res => res.content)
      )
  }

  getArticleImage(fileName: String) {
    if(fileName != '') {
      this.imageService.getImage(fileName).subscribe(
        img => this.img = URL.createObjectURL(img)
      )
    } else
      this.img = 'https://placehold.co/1000x300';
  }



}
