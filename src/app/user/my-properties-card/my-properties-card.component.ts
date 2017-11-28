import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';

@Component({
  selector: 'app-my-properties-card',
  templateUrl: './my-properties-card.component.html',
  styleUrls: ['./my-properties-card.component.scss']
})
export class MyPropertiesCardComponent implements OnInit {
  @Input() data: PropertySummary;
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {

  }

  onRemove() {
    this.remove.emit(this.data.id);
  }
}
