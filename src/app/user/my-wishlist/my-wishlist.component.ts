import { Component, OnInit } from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';
import {WishlistService} from '../wishlist.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent implements OnInit {
  wishlist: PropertySummary[];

  constructor(private _service: WishlistService) {
    this._service.wishlist$.subscribe((data) => {
      this.wishlist = data.list;
    });
  }

  ngOnInit() {
  }

  onRemove(propertyId) {

    this._service.remove(propertyId);
  }
}
