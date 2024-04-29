import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SlickCarouselModule,

  ],
  exports: [AuthRoutingModule]
})
export class AuthModule { }
