import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-socialmedia',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './edit-socialmedia.component.html',
  styleUrl: './edit-socialmedia.component.scss'
})
export class EditSocialmediaComponent {

  myForm!: FormGroup;
  phone : boolean = false;
  selectedFavorite : any;
  passwordVisible = false;
  passwordError: string = '';

  constructor(
                private fb : FormBuilder,
                private dialogRef: MatDialogRef<EditSocialmediaComponent>
             )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
  }
  
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      social:     [ '', [Validators.required ]],

   
    });
  }

  close() {
    this.dialogRef.close();
  }


  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
  




}
