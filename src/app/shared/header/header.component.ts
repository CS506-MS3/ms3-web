import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginModalOpen = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick() {
    this.loginModalOpen = !this.loginModalOpen;
  }

  onSignUpRequest() {
    this.loginModalOpen = false;
    this.router.navigate(['/register']);
  }
}
