import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vouchers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.scss'
})
export class VouchersComponent {


  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  
  phone : boolean = false;
  selectedFavorite : any;

  constructor(
              private location : Location
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

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


}
