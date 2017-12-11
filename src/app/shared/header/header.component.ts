import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {PropertySummary} from '../../_domains/property-summary';
import {WishlistService} from '../../user/wishlist.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  searchForm: FormGroup;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _fb: FormBuilder,
              private _auth: AuthService,
              private _wishlist: WishlistService) {
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
    this.searchForm = this._fb.group({
      keyword: ['', Validators.required]
    });
    this._activatedRoute.queryParams.subscribe((params) => {
      if (params.keyword) {
        this.searchForm.controls['keyword'].setValue(params.keyword);
      } else {
        this.searchForm.controls['keyword'].setValue('');
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
    this._wishlist.remove(id);
  }

  signOut() {

    this._auth.unauthenticate();
  }

  search({value, valid}) {
    if (valid) {
      this._router.navigate(['properties'], {
        queryParams: {
          sortBy: 'recent',
          direction: 'UP',
          keyword: value.keyword
        }
      });
    } else {
      this._router.navigate(['properties'], {
        queryParams: {
          sortBy: 'recent',
          direction: 'UP',
        }
      });
    }
  }
}
