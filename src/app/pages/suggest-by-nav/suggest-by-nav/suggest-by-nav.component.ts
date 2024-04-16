import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-suggest-by-nav',
  standalone: true,
  imports: [ SlickCarouselModule, CommonModule],
  templateUrl: './suggest-by-nav.component.html',
  styleUrl: './suggest-by-nav.component.scss'
})
export class SuggestByNavComponent implements OnInit {


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
          slidesToShow: 2.01,
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
