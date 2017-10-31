import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
