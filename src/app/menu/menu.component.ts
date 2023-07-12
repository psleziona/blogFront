import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  imageSrc = '../assets/images/bar.jpg';
  isAuth = true;

  logout() {
    this.isAuth = false;
    console.log('lo');
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
