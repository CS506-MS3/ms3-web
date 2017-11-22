import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {PropertySummary} from '../../_domains/property-summary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  loginModalOpen = false;
  email: string;
  wishlist: PropertySummary[];

  constructor(private _router: Router, private _auth: AuthService) {
    this.wishlist = [
      {
        id: 1,
        title: 'property1',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property2',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property3',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property4',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property5',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property5',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property6',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      },
      {
        id: 1,
        title: 'property7',
        status: true,
        address: '123 Test Ave.',
        price: 520.12,
        startDate: '2017-11-30T00:00:00',
        duration: 3,
        thumbnailUrl: ''
      }
    ];
    this._auth.auth$.subscribe((auth) => {
      this.authenticated = auth.token !== null;
      this.email = auth.email;
      if (this.authenticated) {
        this.loginModalOpen = false;
      }
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

  onWishlistRemove(id) {
    console.log(id);
  }

  signOut() {

    this._auth.unauthenticate();
  }
}
