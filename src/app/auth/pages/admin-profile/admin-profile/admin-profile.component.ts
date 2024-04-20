import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { EditSocialmediaComponent } from '../../edit-socialmedia/edit-socialmedia/edit-socialmedia.component';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent implements OnInit  {
  
  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  myForm!: FormGroup;
  phone : boolean = false;
  selectedFavorite : any;
  passwordVisible = false;
  passwordError: string = '';

  constructor(
                private fb : FormBuilder,
                public dialog: MatDialog,
             )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

  }
  
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName:     [ 'Celina A.', [Validators.required ]],
      lastName:     [ 'Rivas', [Validators.required ]],
      company:     [ 'Levin', [Validators.required ]],
      address:     [ 'Av. Mullally 1820', [Validators.required ]],
      city:     [ 'Realicó', [Validators.required ]],
      phone:     [ '2302690139', [Validators.required ]],
   
    });
  }

  openDialog() {
    this.dialog.open(EditSocialmediaComponent, {
      disableClose: true
      // data: {
      //   animal: 'panda',
      // },
    });
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
