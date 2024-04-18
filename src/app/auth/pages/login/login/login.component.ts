import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MaterialModule } from '../../../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  @ViewChild ('display' , {static: true} ) display! : ElementRef;
  
  myForm!: FormGroup;
  phone : boolean = false;
  selectedFavorite : any;
  passwordVisible = false;
  passwordError: string = '';


  constructor(
              private location : Location,
              private fb: FormBuilder,
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();


  }
  ngOnInit(): void {

    this.myForm = this.fb.group({
      // email:     [ '', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
      email:     [ '', [Validators.required ]],
      password:  [ '', [Validators.required]], 
      toLStorage:[ true]
    });

  }

  onSaveForm(){

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

}  

  
validField( field: string ) {
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
}

get emailErrorMsg(): string {

  const errors = this.myForm.get('email')?.errors;
  if ( errors?.['required'] ) {
    return 'El email es obligatorio';
  } else if ( errors?.['pattern'] ) {
    return 'El valor ingresado no tiene formato de correo';
  } else if ( errors?.['noExistEmail'] ) {
    return 'No existe email en nuestra base de datos';
  }
  return ''
}

get passwordErrorMsg(): string {

  const errors = this.myForm.get('password')?.errors;
  if ( errors?.['required'] ) {
    return 'Completa este campo';
  } 
  return ''
}

togglePasswordVisibility(value : string) : void {
(value == "password") ? this.passwordVisible = !this.passwordVisible : '';
}

openDialogPassword(){

  // this.dialog.open(PasswordRecoveryComponent, {
  //   panelClass:"custom-modalbox-NoMoreComponent", 
  // });

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
