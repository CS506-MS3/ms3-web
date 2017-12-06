import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-properties-sort',
  templateUrl: './properties-sort.component.html',
  styleUrls: ['./properties-sort.component.scss']
})
export class PropertiesSortComponent implements OnInit {
  @Input() sortInput;
  @Output() onSort = new EventEmitter<any>();

  public sort;

  public SORT_OPTIONS = {
    CATEGORIES: [
      'price',
      'recent'
    ],
    DIRECTION_UP: 'UP',
    DIRECTION_DOWN: 'DOWN'
  };

  constructor() {
  }

  ngOnInit() {
    this.sort = {
      sortBy: this.sortInput.sortBy,
      direction: this.sortInput.direction
    };
  }

  onSelect(value) {
    this.sort.sortBy = value;
    this.onSort.emit(this.sort);
  }

  sortAscending() {
    if (this.sort.direction !== this.SORT_OPTIONS.DIRECTION_UP) {
      this.sort.direction = this.SORT_OPTIONS.DIRECTION_UP;
      this.onSort.emit(this.sort);
    }
  }

  sortDescending() {
    if (this.sort.direction !== this.SORT_OPTIONS.DIRECTION_DOWN) {
      this.sort.direction = this.SORT_OPTIONS.DIRECTION_DOWN;
      this.onSort.emit(this.sort);
    }
  }
}
