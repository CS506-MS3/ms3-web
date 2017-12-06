import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordChangePageComponent} from './password-change-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {UserInfoService} from '../user-info.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PasswordChangePageComponent', () => {
  let component: PasswordChangePageComponent;
  let fixture: ComponentFixture<PasswordChangePageComponent>;

  const mockService = {
    userInfo$: Observable.of({
      phone: '12312341234',
      notification: true
    }),
    update: jasmine.createSpy('update'),
    changePassword: jasmine.createSpy('changePassword')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: UserInfoService, useValue: mockService}
      ],
      declarations: [PasswordChangePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
