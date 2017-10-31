import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmailForm} from '../../_domains/email-form';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Output() submit = new EventEmitter<EmailForm>();

  emailForm: FormGroup;

  get email() {
    return this.emailForm.get('email');
  }

  constructor(private _formBuilder: FormBuilder) {
    this.emailForm = this._formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {

      this.submit.emit(value);
    }
  }
}
