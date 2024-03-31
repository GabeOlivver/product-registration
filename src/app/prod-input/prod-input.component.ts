import { Component } from '@angular/core';
import { Product } from '../products';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prod-input',
  templateUrl: './prod-input.component.html',
  styleUrl: './prod-input.component.css'
})
export class ProdInputComponent {
  
  products: Product[] = [];

  formGroupProduct : FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      quantity: [''],
      price: [''],
      description: ['']
    });
  }

  save(){
    this.products.push(this.formGroupProduct.value);
  }
}
