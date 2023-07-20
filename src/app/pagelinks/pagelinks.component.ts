import {Component, Input} from '@angular/core';
import {Page} from "../_model/Page";

@Component({
  selector: 'app-pagelinks',
  template: `
    <div class="pageable">
      <ul>
        <li *ngFor="let i of fakeArray;">{{ i }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./pagelinks.component.css']
})
export class PagelinksComponent {
  @Input() page!: Page;
  // @ts-ignore
  fakeArray: any[];
  ngOnInit() {
    this.fakeArray = new Array(this.page.totalPages);
  }
}
