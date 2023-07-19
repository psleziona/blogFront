import { Component, OnInit } from '@angular/core';
import {Article} from "../_model/Article";
import {Comment} from "../_model/Comment";
import {ArticleService} from "../_services/article.service";
import {AuthService} from "../_services/auth.service";
import {fromEvent, of, scan, Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numbers$ = of(1,2,3,4,5);
  x : Subject<number> = new Subject<number>();
  d() {
    this.x.next(1);
  }

  ngOnInit() {
    // this.numbers$
    //   .pipe(scan((acc, next) => acc + next, 0))
    //   .subscribe(res => console.log(res))
    this.x.subscribe(r => console.log(r))
  }
}
