import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  @ViewChild ('display' , {static: true} ) display! : ElementRef;
  
  myForm!: FormGroup;
  phone : boolean = false;
  selectedFavorite : any;
  passwordVisible = false;
  passwordError: string = '';
  confirmVisible = false;
  termsSelected = false;
  marketingSelected = true;




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
      firstName: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ],
      lastName:  [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ],
      // email:     [ '', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.registerEmailService]],
      // password:  [ '', [Validators.required, Validators.minLength(8), Validators.pattern(this.validatorService.passwordPattern)] ],
      email:     [ '', [Validators.required ]],
      password:  [ '', [Validators.required]],
      confirm:   [ '', [Validators.required]],
      terms:     [ this.termsSelected, [Validators.required]],
      marketing: [ this.marketingSelected ],
      
      
   },{
      // validators: [ this.validatorService.passwordValidator('password','confirm')]
   })
    

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
  (value == "confirm") ? this.confirmVisible = !this.confirmVisible : '';

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
