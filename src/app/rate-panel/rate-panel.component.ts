import {Component, HostListener, Input} from '@angular/core';
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-rate-panel',
  templateUrl: './rate-panel.component.html',
  styleUrls: ['./rate-panel.component.css']
})
export class RatePanelComponent {
  values = Array.from(Array(10).keys()).map(x => x + 1);
  @Input() currentRate!: number;
  markRate: number;

  onHover(value: number) {
    this.markRate = value;
  }

  onClick(value: number) {
    console.log(value);
  }
}
