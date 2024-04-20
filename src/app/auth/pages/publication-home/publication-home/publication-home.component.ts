import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddOfferDescriptionComponent } from '../../add-offer-description/add-offer-description/add-offer-description.component';
import { SponsorService } from '../../../../shared/sponsor/sponsor.service';
import { MatDialog } from '@angular/material/dialog';
import { OfferExampleModalComponent } from '../../../modal/offer-example-modal/offer-example-modal/offer-example-modal.component';

@Component({
  selector: 'app-publication-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './publication-home.component.html',
  styleUrl: './publication-home.component.scss'
})
export class PublicationHomeComponent implements OnInit {

  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  myForm!: FormGroup;
  phone : boolean = false;
  selectedFavorite : any;
  passwordVisible = false;
  passwordError: string = '';

  constructor(
              private fb : FormBuilder,
              private _bottomSheet: MatBottomSheet,
              private sponsorService : SponsorService,
              public dialog: MatDialog,



  )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      headline:     [ '', [Validators.required ]],
      description:     [ '', [Validators.required ]],
      price:     [ '', [Validators.required ]],
      expirationDate:     [ '', [Validators.required ]],
    });

    this.sponsorService.closeBottomSheet$.subscribe((emmited)=>{if(emmited){this.closeBottomSheet()}});

  }

  openDialog() {
    this.dialog.open(OfferExampleModalComponent, {
      // data: {
      //   animal: 'panda',
      // },
    });
  }

  openDialogAddDescription() {
    this._bottomSheet.open(AddOfferDescriptionComponent);
  }

  closeBottomSheet(){
    this._bottomSheet.dismiss();
    }


  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
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
  


}
