import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { RouterModule } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { AdminHelpComponent } from "../../admin-help/admin-help/admin-help.component";
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CategoryBottomsheetComponent } from '../../../bottomsheet/category-bottomsheet/category-bottomsheet/category-bottomsheet.component';
import { SponsorService } from '../../../../shared/sponsor/sponsor.service';

@Component({
    selector: 'app-admin-vouchers',
    standalone: true,
    templateUrl: './admin-vouchers.component.html',
    styleUrl: './admin-vouchers.component.scss',
    imports: [SlickCarouselModule, CommonModule, MaterialModule, RouterModule, AdminHelpComponent]
})
export class AdminVouchersComponent implements OnInit {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  showLabel : boolean = true;
  phone: boolean = false;




  slides = [
    {id: 6, img: "assets/store.png", name: 'DESPENSA'},
    {id: 1, img: "assets/meat.png", name: 'CARNICERÍA'},
    {id: 2, img: "assets/clean.png", name: 'LIMPIEZA'},
    {id: 3, img: "assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
    {id: 4, img: "assets/pets.png", name: 'MASCOTAS'},
    {id: 5, img: "assets/drinks.png", name: 'BEBIDAS'},
  ];

  
  slideConfig = {
    slidesToScroll: 5,
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
          slidesToShow: 3,
        }
      }
      
    ]
  };


  vouchers=[
              {
                img: 'assets/drill.jpg',
                title: "Taladro atornillador",
                expirationDate: "12/12/2024",
              },
              {
                img: 'assets/clean.png',
                title: "Semana de la limpieza",
                expirationDate: "12/12/2024",
              },
              {
                img: 'assets/off1.jpg',
                title: "Hamburgesas doble queso",
                expirationDate: "12/12/2024",
              }
            ]

    constructor(
                 private _bottomSheet: MatBottomSheet,
                 private sponsorService : SponsorService,

    ){
      
    }

  ngOnInit(): void {

    (screen.width <= 800) ? this.phone = true : this.phone = false;

    this.sponsorService.closeBottomSheet$.subscribe((emmited)=>{ if(emmited)this._bottomSheet.dismiss()})




  }


  openBottomShettCategory() {
    this._bottomSheet.open(CategoryBottomsheetComponent);
  }


  slideChanged(event: Event) {
    // Actualiza el índice del slide actual
  }
  goToNextSlide() {
    this.slickModal.slickNext();
  }

  goToPrevSlide() {
    this.slickModal.slickPrev();
  }

}
