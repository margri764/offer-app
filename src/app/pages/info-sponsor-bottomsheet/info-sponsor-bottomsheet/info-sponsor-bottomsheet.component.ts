import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
import { SponsorService } from '../../../shared/sponsor/sponsor.service';

@Component({
  selector: 'app-info-sponsor-bottomsheet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-sponsor-bottomsheet.component.html',
  styleUrl: './info-sponsor-bottomsheet.component.scss'
})
export class InfoSponsorBottomsheetComponent {

  phone : boolean = false;
  placeholder : string = "Buscar en Zig Zag...";
  selectedFavorite : any;
  title:any;
  sponsor:any


  slides = [
    {img: "assets/zigzag.png", title: 'Zig Zag', address: "Av. Mullally 1894", phone: "02331 15-46-2759"},
    {img: "assets/avicola.png", title: 'Avícola Realicó', address: "Francia 1672", phone: "02331 15-46-2759"},
    {img: "assets/levin.png", title: 'Levin', address: "Av. Mullally 2002", phone: "02331 15-46-2759"},
  ];


  constructor(
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private sponsorService : SponsorService
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;

  
  }

  ngOnInit(): void {

    this.getSponsor(this.data.id)

  }


  getSponsor( id:any ){

    this.sponsor = this.slides.find( element => element.title === id )
    console.log( this.sponsor);
    

  }

  closeBottomsheet(){
    this.sponsorService.closeBottomSheet$.emit(true);

  }






}
