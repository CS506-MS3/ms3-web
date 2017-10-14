import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoService } from './user-info.service';
import { AccessService } from './access.service';
import { WishlistService } from './wishlist.service';
import { MyPropertiesService } from './my-properties.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserInfoService, AccessService, WishlistService, MyPropertiesService]
})
export class UserModule { }
