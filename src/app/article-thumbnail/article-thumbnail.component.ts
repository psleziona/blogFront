import {Component, Input} from '@angular/core';
import {Article} from "../Article";

@Component({
  selector: 'app-article-thumbnail',
  template: `
    <div class="article-thumbnail">
      <h4><a routerLink="/article/{{ article.idArticle }}">{{ article.title}}</a></h4>
      <p><span>Komentarze: {{ article.comments?.length }} </span><span style="float: right">Ocena: 7</span></p>
    </div>
  `,
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent {
  @Input() article!:Article
}
