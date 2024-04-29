import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';

// CurrencyMaskModule
// import { CurrencyMaskModule } from "ng2-currency-mask";


@Component({
  selector: 'app-set-discount',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, CurrencyMaskModule],
  templateUrl: './set-discount.component.html',
  styleUrl: './set-discount.component.scss'
})
export class SetDiscountComponent {

  myForm! : FormGroup;
  percent : boolean = false;
  money : boolean = false;
  discount : string = '';

  currencyOptions: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: false,
    decimal: '.',
    thousands: ',',
    precision: 2,
    prefix: '',
    suffix: '',
  };

  constructor(
              private fb : FormBuilder 
             )
  {
    this.myForm = this.fb.group({
      amount: ['',[Validators.required]]

    });

    // this.currencyOptions.precision = 2;
  }

  selectTypeDiscount( selection : string ){

    if(selection === 'percent'){
      this.percent = true;
      this.money = false;
      this.currencyOptions.precision = 0;
    }else if(selection === 'money'){
      this.percent = false;
      this.money = true;
      this.currencyOptions.precision = 2;
    }
    // this.currencyOptions.prefix = this.discount;
  }

}
