import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentsService} from "../_services/comments.service";
import {Comment} from "../_model/Comment";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  addCommentForm = new FormGroup({
    text: new FormControl("")
  });
  constructor(private commentService: CommentsService) {}

  addComment() {
    const text = this.addCommentForm.value.text ?? '';
    const comment:Comment = {
      text: text
    }
    this.commentService.addComment(comment);
  }
}
