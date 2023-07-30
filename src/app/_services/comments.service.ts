import { Injectable } from '@angular/core';
import {Comment} from "../_model/Comment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentApiUrl = 'http://localhost:8080/api/comments';
  constructor(private http: HttpClient) { }

  addComment(comment: Comment, idArticle: number) {
    return this.http.post(`${this.commentApiUrl}/${idArticle}`, comment);
  }
}
