import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionService } from './auction.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuctionService]
})
export class AuctionModule { }
