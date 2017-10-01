import { TestBed, inject } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));

  it('should have create method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'create');

    service.create();

    expect(service.create).toHaveBeenCalled();
  }));

  it('should have activate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'activate');

    service.activate();

    expect(service.activate).toHaveBeenCalled();
  }));

  it('should have deactivate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'deactivate');

    service.deactivate();

    expect(service.deactivate).toHaveBeenCalled();
  }));

  it('should have reactivate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'reactivate');

    service.reactivate();

    expect(service.reactivate).toHaveBeenCalled();
  }));
});
