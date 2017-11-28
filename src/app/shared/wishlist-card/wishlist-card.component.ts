import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss']
})
export class WishlistCardComponent implements OnInit {
  @Input() data: PropertySummary;
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.data.id);
  }
}
