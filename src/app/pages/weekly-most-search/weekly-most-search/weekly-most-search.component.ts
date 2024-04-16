import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-weekly-most-search',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './weekly-most-search.component.html',
  styleUrl: './weekly-most-search.component.scss'
})
export class WeeklyMostSearchComponent {


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
