import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-list-page',
  templateUrl: './property-list-page.component.html',
  styleUrls: ['./property-list-page.component.scss']
})
export class PropertyListPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  data: number[] = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.data.push(i);
    }
  }

  ngOnInit() {
  }

}
