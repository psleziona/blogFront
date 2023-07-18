import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLogged$ = this.isLoggedInSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedInSubject.next(localStorage.getItem('token') != null);
  }

  login(body: Object) {
    this.http.post<any>(this.authUrl + "/login", body).subscribe(
      response => {
        localStorage.setItem('token', response['token']);
        this.isLoggedInSubject.next(true);
        this.router.navigateByUrl('/');
      }
    );
  }

}
