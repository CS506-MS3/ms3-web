import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoEditPageComponent } from './user-info-edit-page.component';

describe('UserInfoEditPageComponent', () => {
  let component: UserInfoEditPageComponent;
  let fixture: ComponentFixture<UserInfoEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoEditPageComponent ]
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
