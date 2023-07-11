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

  getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(this.articleApiUrl, {headers: this.headers});
  }
}
