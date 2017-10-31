import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up-progress',
  templateUrl: './sign-up-progress.component.html',
  styleUrls: ['./sign-up-progress.component.scss']
})
export class SignUpProgressComponent implements OnInit {
  @HostBinding('class') cssClass = 'sidenav';
  @Input() stage: string;

  constructor() { }

  ngOnInit() {
  }

}
