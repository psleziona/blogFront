import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
    newArticleForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    });

    constructor(private articleService: ArticleService) {}
  submitArticle() {
    let article : Article = {
      title: this.newArticleForm.value?.title ?? '',
      text: this.newArticleForm.value?.text ?? ''
    }

    this.articleService.addArticle(article);
  }
}
