import { TestBed, inject } from '@angular/core/testing';

import { PropertiesService } from './properties.service';

xdescribe('PropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertiesService]
    });
  });

  it('should be created', inject([PropertiesService], (service: PropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
