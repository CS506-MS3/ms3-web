import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-listing-page',
  templateUrl: './create-listing-page.component.html',
  styleUrls: ['./create-listing-page.component.scss'],
  host: {
    class:'content-container'
  }
})
export class CreateListingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSumbit(form) {
  }
}
