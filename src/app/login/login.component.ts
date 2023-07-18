import { Component } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authService: AuthService) {
  }

  submitLogin() {
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(body);
  }
}
