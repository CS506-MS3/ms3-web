import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.scss']
})
export class SearchingBarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  submitSearch(event, formData: NgForm) {
    console.log(event);
    console.log(formData.value);
    const query = formData.value['q'];
    if (query) {
      this.router.navigate(['/properties', {q: query}]);
    }

  }
}
