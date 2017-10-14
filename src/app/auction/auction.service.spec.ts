import { TestBed, inject } from '@angular/core/testing';

import { AuctionService } from './auction.service';

xdescribe('AuctionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuctionService]
    });
  });

  it('should be created', inject([AuctionService], (service: AuctionService) => {
    expect(service).toBeTruthy();
  }));
});
