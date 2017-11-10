import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @Input() properties: PropertySummary[];
  @Output() requestMore = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getMore() {

    this.requestMore.emit();
  }
}
