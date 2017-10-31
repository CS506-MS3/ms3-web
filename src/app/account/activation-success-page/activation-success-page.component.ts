import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-activation-success-page',
  templateUrl: './activation-success-page.component.html',
  styleUrls: ['./activation-success-page.component.scss']
})
export class ActivationSuccessPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
