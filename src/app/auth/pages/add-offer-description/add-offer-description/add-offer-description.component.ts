import { Component, OnInit } from '@angular/core';
import { SponsorService } from '../../../../shared/sponsor/sponsor.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-offer-description',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './add-offer-description.component.html',
  styleUrl: './add-offer-description.component.scss'
})
export class AddOfferDescriptionComponent implements OnInit {

  myForm!: FormGroup;


  constructor(
              private sponsorService : SponsorService,
              private fb : FormBuilder,

            )
  {}

  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      item:     [ '', [Validators.required ]],
     
    });

  }

  closeBottomSheet(){
    this.sponsorService.closeBottomSheet$.emit(true);
  }

}
