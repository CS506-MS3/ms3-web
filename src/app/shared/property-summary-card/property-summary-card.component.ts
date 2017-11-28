import {Component, Input, OnInit} from '@angular/core';
import {PropertySummary} from '../../_domains/property-summary';

@Component({
  selector: 'app-property-summary-card',
  templateUrl: './property-summary-card.component.html',
  styleUrls: ['./property-summary-card.component.scss']
})
export class PropertySummaryCardComponent implements OnInit {
  @Input() data: PropertySummary;

  constructor() { }

  ngOnInit() {
  }

}
