import {Component, Input, OnInit} from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';
import {WishlistService} from '../../user/wishlist.service';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {
  @Input() property: PropertySummary;

  wishlist: PropertySummary[] = [];
  hasWishlist: boolean;

  constructor(private _service: WishlistService) {
    this._service.wishlist$.subscribe((data) => {
      if (data.list.length > 0) {
        this.wishlist = data.list;
      }
    });
    this._service.featureOn$.subscribe((featureOn) => {
      this.hasWishlist = featureOn
    });
  }

  ngOnInit() {
  }

  isInWishlist() {
    return this.wishlist.find((item) => this.property.id === item.id);
  }

  toggleWishlist($event) {
    $event.stopPropagation();
    if (this.isInWishlist()) {
      this._service.remove(this.property.id);
    } else {
      this._service.add(this.property.id);
    }
  }
}
