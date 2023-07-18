import {Component, HostListener, Input} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  imageSrc = '../assets/images/bar.jpg';
  isAuth = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.isAuth = isLoggedIn;
    })
  }

  logout() {
    localStorage.clear();
    this.isAuth = false;
    this.router.navigateByUrl("/");
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const posY = window.pageYOffset;
    const img = document.querySelector('header>img');
    const nav = document.querySelector('nav');

    // @ts-ignore
    const imgHeight = img.height;
    // @ts-ignore
    const navHeight = nav.offsetHeight;

    if(posY > imgHeight - navHeight)
      nav!.style.top = `${imgHeight- navHeight}px`;
    else
      nav!.style.top = posY.toString() + 'px';
  }
}
