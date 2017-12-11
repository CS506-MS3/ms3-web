/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertBarComponent} from './alert-bar.component';
import {StoreModule} from '@ngrx/store';
import {AppAlert} from '../../_domains/app-alert';
import {AlertActions} from '../../_actions/alert.actions';
import {ALERT_TYPE_CSS} from '../../_constants/alert-bar-css.constant';
import {RouterTestingModule} from '@angular/router/testing';

describe('AlertBarComponent', () => {
  let component: AlertBarComponent;
  let fixture: ComponentFixture<AlertBarComponent>;
  let mockAppAlertReducer;
  let testAlert: AppAlert;
  beforeEach(async(() => {
    testAlert = {
      show: true,
      type: ALERT_TYPE_CSS.DANGER,
      message: 'test message'
    };
    mockAppAlertReducer = jasmine.createSpy('appAlertReducer').and.returnValue(testAlert);
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({alert: mockAppAlertReducer}),
        RouterTestingModule
      ],
      declarations: [AlertBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define alert', () => {
    expect(component.alert).toEqual(testAlert);
  });

  describe('method: onClose', () => {
    it('should call dispatch with AlertActions.HIDE_ALERT', () => {
      component.onClose();

      expect(mockAppAlertReducer).toHaveBeenCalledWith(testAlert, new AlertActions.HideAlert());
    });
  });
});
