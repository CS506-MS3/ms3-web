import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {StoreModule} from '@ngrx/store';

describe('AuthService', () => {
  let mockAuthReducer;
  beforeEach(() => {
    mockAuthReducer = jasmine.createSpy('reducer');
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: mockAuthReducer
        })
      ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
