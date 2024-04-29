import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { SponsorService } from '../../../../shared/sponsor/sponsor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-bottomsheet',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './category-bottomsheet.component.html',
  styleUrl: './category-bottomsheet.component.scss'
})
export class CategoryBottomsheetComponent {

  currentSlideIndex: any;

  selectedCategories : any[]=[];

  constructor(
              private sponsorService : SponsorService,
              private router :Router
            )
  {

  }

  setDiscount(){
    this.router.navigateByUrl('/auth/mi-tienda/set-descuento');
    this.sponsorService.closeBottomSheet$.emit(true);
  }

  selectSlide( category:any){

    this.currentSlideIndex = category;
    if(!this.selectedCategories.includes(category)){
      this.selectedCategories.push(category);
    }else{
      return
    }

  }
  
  removeCategory(category:any ){

    this.selectedCategories = this.selectedCategories.filter(element => element !== category);
    if( this.selectedCategories.length === 0){ this.currentSlideIndex = ''  }

  }




}
