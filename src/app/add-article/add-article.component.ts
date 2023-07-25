import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../_services/article.service";
import {Article} from "../_model/Article";
import {ImagesService} from "../_services/images.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  newArticleForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });
  uploadImage: File;

  constructor(private articleService: ArticleService, private imageService: ImagesService) {}

  submitArticle() {
    let article : Article = {
      title: this.newArticleForm.value?.title ?? '',
      text: this.newArticleForm.value?.text ?? '',
      image: this.uploadImage?.name ?? ''
    }

    if(this.uploadImage) {
      const image = new FormData();
      image.append("file", this.uploadImage, this.uploadImage.name);
      this.imageService.saveImage(image);
    }

    this.articleService.addArticle(article);
  }

  public onImageUpload(event: any) {
    this.uploadImage = event.target.files[0];
  }
}
