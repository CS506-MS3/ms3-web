import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserInfoEditPageComponent} from './user-info-edit-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserInfoService} from '../user-info.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RouterTestingModule} from '@angular/router/testing';

describe('UserInfoEditPageComponent', () => {
  let component: UserInfoEditPageComponent;
  let fixture: ComponentFixture<UserInfoEditPageComponent>;

  const mockService = {
    userInfo$: Observable.of({
      phone: '12312341234',
      notification: true
    }),
    update: jasmine.createSpy('update')
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
      declarations: [UserInfoEditPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
