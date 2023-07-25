import {Component, Input} from '@angular/core';
import {Article} from "../_model/Article";
import {ImagesService} from "../_services/images.service";

@Component({
  selector: 'app-article-thumbnail',
  template: `
    <div class="article-thumbnail">
      <img [src]="img" alt="">
      <h4><a routerLink="/article/{{ article.idArticle }}">{{ article.title}}</a></h4>
      <p><span>Komentarze: {{ article.comments?.length }} </span></p>
      <p><span>Ocena: {{ article.averageRate }}</span><span
        style="float: right">Autor: {{ article.author?.firstname + ' ' + article.author?.lastname }}</span></p>
    </div>
  `,
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent {
  @Input() article!:Article
  img: any;
  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.imageService.getImage(this.article.image).subscribe(
      img => this.img =  URL.createObjectURL(img)
    )
  }
}
