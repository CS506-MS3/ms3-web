import { TestBed, inject } from '@angular/core/testing';

import { PasswordResetService } from './password-modification.service';

xdescribe('PasswordResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordResetService]
    });
  });

  it('should be created', inject([PasswordResetService], (service: PasswordResetService) => {
    expect(service).toBeTruthy();
  }));
});
