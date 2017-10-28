import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable()
export class ContactService {

  constructor(private _store: Store<any>) {
  }

  contactEmployee(form) {
  }

  contactOwner(userId, form) {
  }

  private contact(id, form) {
  }
}
