import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {PropertySummary} from '../../_domains/property-summary';
import {WishlistService} from '../../user/wishlist.service';

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

  constructor(private _router: Router, private _auth: AuthService, private _wishlist: WishlistService) {
    this._auth.auth$.subscribe((auth) => {
      this.authenticated = auth.token !== null;
      this.email = auth.email;
      if (this.authenticated) {
        this.loginModalOpen = false;
      }
    });
    this._wishlist.wishlist$.subscribe((wishlist) => {
      this.wishlist = wishlist.list;
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
    this._wishlist.remove(id);
  }

  signOut() {

    this._auth.unauthenticate();
  }
}
