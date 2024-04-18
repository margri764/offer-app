import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-day-offer',
  standalone: true,
  imports: [ SlickCarouselModule, CommonModule, RouterModule],
  templateUrl: './day-offer.component.html',
  styleUrl: './day-offer.component.scss'
})
export class DayOfferComponent implements OnInit {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  phone: boolean = false;


  slides = [
    {img: "assets/meat.png", name: 'CARNICERÍA'},
    {img: "assets/clean.png", name: 'LIMPIEZA'},
    {img: "assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
    {img: "assets/pets.png", name: 'MASCOTAS'},
    {img: "assets/drinks.png", name: 'BEBIDAS'},
    {img: "assets/store.png", name: 'DESPENSA'},
  ];


  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.08,
        }
      }
      
    ]

  };

  ngOnInit(): void {
    (screen.width <= 800) ? this.phone = true : this.phone = false;

  }


  goToNextSlide() {
    this.slickModal.slickNext();
  }

  goToPrevSlide() {
    this.slickModal.slickPrev();
  }

}
