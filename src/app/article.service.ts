import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleApiUrl = 'http://localhost:8080/api/articles';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // dodać tokeny później
  });
  constructor(private http: HttpClient) { }

  getArticles() : Observable<any> {
    return this.http.get<any>(this.articleApiUrl, {headers: this.headers});
  }

  getArticle(idArticle: number) : Observable<Article> {
    return this.http.get<Article>(this.articleApiUrl + "/" + idArticle, {headers: this.headers});
  }

  addArticle(article: Article) {
    return this.http.post(this.articleApiUrl, article, {headers: this.headers}).subscribe();
  }
}
