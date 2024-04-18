import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchComponent } from "../../search/search/search.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SponsorComponent } from '../../sponsor/sponsor/sponsor.component';
import { SponsorHomeComponent } from '../../sponsor-home/sponsor-home/sponsor-home.component';
import { ViewSponsorComponent } from '../../view-sponsor/view-sponsor/view-sponsor.component';
import { InfoSponsorBottomsheetComponent } from '../../info-sponsor-bottomsheet/info-sponsor-bottomsheet/info-sponsor-bottomsheet.component';
import { SponsorService } from '../../../shared/sponsor/sponsor.service';

@Component({
    selector: 'app-view-more',
    standalone: true,
    templateUrl: './view-more.component.html',
    styleUrl: './view-more.component.scss',
    imports: [CommonModule, SearchComponent]
})
export class ViewMoreComponent {

  @ViewChild ('display' , {static: true} ) display! : ElementRef;

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


  
  offer = {
            description: ['1 Taladro / Atornillador', '2 baterias de litio', '1 cargador', '1 maletin'], 
            expirationDate: '12/09/2024',
            delivery: false,
            message: 'Taladros de importacion propia, disponemos de una amplia gama de reouestos y services oficiales'
          }



  constructor(
              private location : Location,
              private activatedRoute :  ActivatedRoute,
              private _bottomSheet: MatBottomSheet,
              private sponsorService : SponsorService

            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

    this.activatedRoute.params.subscribe(
      ( {id} )=>{ this.getSponsor(id)})

  }
  ngOnInit(): void {

    this.sponsorService.closeBottomSheet$.subscribe( (emmited)=> {if(emmited){ this.closeBottomSheet() } } );
  }


  getSponsor( id:any ){

    this.title = id;

    this.sponsor = this.slides.find( element => element.title === id )
    console.log( this.sponsor);
    

  }

  openDialogSponsor() {
    const dialogRef = this._bottomSheet.open(InfoSponsorBottomsheetComponent, {
      data: {id:"Zig Zag"}
    });

    dialogRef.afterDismissed().subscribe(result => {
      console.log('El diálogo se ha cerrado');
    });
  
 
  }

  closeBottomSheet(){
    this._bottomSheet.dismiss();
    }
    

  goToTop(){
    setTimeout( () => {
      this.display.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        block: "center",
      });
     }
    )
  }

  goBack(){
    this.location.back();
  }

  favorite( item:any ){
    this.selectedFavorite = item.name;
  }



}
