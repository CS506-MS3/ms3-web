import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-properties-list',
  templateUrl: './my-properties-list.component.html',
  styleUrls: ['./my-properties-list.component.scss']
})
export class MyPropertiesListComponent implements OnInit {
  dummyNum = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
