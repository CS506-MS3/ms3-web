import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {AccessService} from '../access.service';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss']
})
export class CancelSubscriptionComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  cancelForm: FormGroup;
  subscriptionType: string;

  constructor(private _service: AccessService,
              private _currentRoute: ActivatedRoute,
              private _fb: FormBuilder) {
    this._currentRoute.queryParams.subscribe((params: Params) => {
      this.subscriptionType = params.type;
    });
    this.cancelForm = this._fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid && this.subscriptionType) {
      this._service.cancelSubscription(value, this.subscriptionType);
    }
  }
}
