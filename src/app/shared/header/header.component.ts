import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  loginModalOpen = false;
  email: string;

  constructor(private _router: Router, private _auth: AuthService) {
    this._auth.auth$.subscribe((auth) => {
      this.authenticated = auth.token !== null;
      this.email = auth.email;
    });
  }

  ngOnInit() {
  }

  onClick() {
    this.loginModalOpen = !this.loginModalOpen;
  }

  onSignUpRequest() {
    this.loginModalOpen = false;
    this._router.navigate(['/account/register']);
  }

  signOut() {

    this._auth.unauthenticate();
  }
}
