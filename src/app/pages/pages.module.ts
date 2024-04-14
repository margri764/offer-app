import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  
  declarations: [
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule
  ],

  exports: [
    PagesRoutingModule,


  ]
})
export class PagesModule { }
