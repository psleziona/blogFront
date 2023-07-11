import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const posY = window.pageYOffset;
    const nav = document.querySelector('nav');
    if(posY >= 250)
      nav!.style.top = '249px';
    else
      nav!.style.top = posY.toString() + 'px';
  }
}
