import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up-success-page',
  templateUrl: './sign-up-success-page.component.html',
  styleUrls: ['./sign-up-success-page.component.scss']
})
export class SignUpSuccessPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
