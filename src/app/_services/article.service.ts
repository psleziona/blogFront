import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../_model/Article";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleApiUrl = 'http://localhost:8080/api/articles';
  constructor(private http: HttpClient, private router: Router) { }

  getArticles() : Observable<any> {
    return this.http.get<any>(this.articleApiUrl);
  }

  getArticle(idArticle: number) : Observable<Article> {
    return this.http.get<Article>(this.articleApiUrl + "/" + idArticle);
  }

  addArticle(article: Article) {
    return this.http.post(this.articleApiUrl, article, { observe: 'response'}).subscribe(
      response => {
        const temp = response.headers.get("Location")!.split('/');
        const articleId = temp[temp.length - 1];
        this.router.navigateByUrl(`/article/${articleId}`);
      }
    );
  }
}
