import { TestBed, inject } from '@angular/core/testing';

import { MyPropertiesService } from './my-properties.service';

describe('MyPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPropertiesService]
    });
  });

  it('should be created', inject([MyPropertiesService], (service: MyPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
