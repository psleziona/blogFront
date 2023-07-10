import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleApiUrl = 'http://localhost:8080/api/articles';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // dodać tokeny później
  });
  constructor() { }
}
