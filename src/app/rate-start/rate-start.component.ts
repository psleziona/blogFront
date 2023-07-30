import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-rate-start',
  template: `
    <fa-icon
      [ngStyle]="{'color': starColor}"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
      (click)="onClick()"
      [icon]="starIcon">
    </fa-icon>
  `,
  styleUrls: ['./rate-start.component.css']
})
export class RateStartComponent {
  starIcon=faStar;
  starColor = '#e1e1e1';
  @Input() rateValue: number;
  @Input() markStar: number;
  @Output() chooseRate: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHover: EventEmitter<number> = new EventEmitter<number>();

  onMouseEnter() {
    this.onHover.emit(this.rateValue);
  }

  onMouseLeave() {
    this.onHover.emit(0);
  }

  onClick() {
    this.chooseRate.emit(this.rateValue);
  }

  ngOnChanges() {
    if(this.markStar === 0 || this.rateValue > this.markStar) {
      this.starIcon = faStar;
      this.starColor = '#314f65';
    }
    else {
      this.starIcon = faStarSolid;
      this.starColor = '#5db2ef'
    }
  }
}
