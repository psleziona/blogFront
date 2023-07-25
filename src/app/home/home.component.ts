import { Component, OnInit } from '@angular/core';
import {Article} from "../_model/Article";
import {Comment} from "../_model/Comment";
import {ArticleService} from "../_services/article.service";
import {AuthService} from "../_services/auth.service";
import {fromEvent, interval, map, of, scan, startWith, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ImagesService} from "../_services/images.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numbers$ = of(1,2,3,4,5);
  x : Subject<number> = new Subject<number>();

  fileName = '';
  tyg: any;

  constructor(private articleService: ArticleService, private imageService: ImagesService) {}

  // @ts-ignore
  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      let bytes;
      file.stream().getReader().read()
        .then(result => {
          if(!result.done) {

            bytes = new Uint8Array(result.value);
            const binaryString = String.fromCharCode(...bytes);
            const base64String = btoa(binaryString);
            let art: Article = {
              title: "dd",
              image: base64String
            }
            console.log(art);
            this.articleService.addArticle(art);
          }
        })
        .catch(err => console.log(err))

    }
  }
  d() {
    this.x.next(1);
  }

  ngOnInit() {
    // this.imageService.getImage('scre.png').subscribe(
    //   img => this.tyg = URL.createObjectURL(img)
    // )


    // this.numbers$
    //   .pipe(scan((acc, next) => acc + next, 0))
    //   .subscribe(res => console.log(res))
    // this.x.subscribe(r => console.log(r))
    // this.fib$.subscribe(console.log)
  }

  fib$ = interval(1000).pipe(
    scan(([a,b]) => [b, a + b], [0,1]),
    map(([,n]) => n)
  )
}
