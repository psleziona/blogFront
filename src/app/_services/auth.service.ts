import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {User} from "../_model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api';
  public isLoggedInSubject = new BehaviorSubject<boolean>(false);
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

  register(user: User) {
    this.http.post<User>(this.authUrl + "/register", user).subscribe()
  }

}
