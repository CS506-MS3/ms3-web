import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  @Input() properties;
  @Output() requestMore = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getMore() {
  }
}
