import {TestBed, inject} from '@angular/core/testing';

import {AccessService} from './access.service';

xdescribe('AccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessService]
    });
  });

  it('should be created', inject([AccessService], (service: AccessService) => {
    expect(service).toBeTruthy();
  }));
});
