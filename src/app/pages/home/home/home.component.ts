import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { SuggestByNavComponent } from "../../suggest-by-nav/suggest-by-nav/suggest-by-nav.component";
import { DayOfferComponent } from "../../day-offer/day-offer/day-offer.component";
import { WeeklyMostSearchComponent } from "../../weekly-most-search/weekly-most-search/weekly-most-search.component";
import { CommonModule } from '@angular/common';
import { SponsorComponent } from "../../sponsor/sponsor/sponsor.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SlickCarouselModule, SuggestByNavComponent, DayOfferComponent, WeeklyMostSearchComponent, CommonModule, SponsorComponent]
})
export class HomeComponent {


  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slideTest = [
      {img: window.innerWidth <= 800 ? "../assets/slider-1-phone.jpg" : "../assets/slider-1.jpg"},
      {img: window.innerWidth <= 800 ? "../assets/slider-2-phone.jpg" : "../assets/slider-2.jpg"}
    ];
  }


  title = 'soloofertas';
  phone: boolean = false;
  slideTest: any[] = [];


  slides = [
    {img: "../assets/meat.png", name: 'CARNICERÍA'},
    {img: "../assets/clean.png", name: 'LIMPIEZA'},
    {img: "../assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
    {img: "../assets/pets.png", name: 'MASCOTAS'},
    {img: "../assets/drinks.png", name: 'BEBIDAS'},
    {img: "../assets/store.png", name: 'DESPENSA'},
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
          slidesToShow: 3.1,
        }
      }
      
    ]
  };


  constructor(
               
  ) 
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.onResize();
  }

  ngOnInit(): void {
  }

  goToNextSlide() {
    this.slickModal.slickNext();
  }

  goToPrevSlide() {
    this.slickModal.slickPrev();
  }

 
}
