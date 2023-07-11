import { Component } from '@angular/core';

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
}
