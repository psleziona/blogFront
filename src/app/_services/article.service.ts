import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleApiUrl = 'http://localhost:8080/api/articles';
  constructor(private http: HttpClient) { }

  getArticles() : Observable<any> {
    return this.http.get<any>(this.articleApiUrl);
  }

  getArticle(idArticle: number) : Observable<Article> {
    return this.http.get<Article>(this.articleApiUrl + "/" + idArticle);
  }

  addArticle(article: Article) {
    return this.http.post(this.articleApiUrl, article).subscribe();
  }
}
