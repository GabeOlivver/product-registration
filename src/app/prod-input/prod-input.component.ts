import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-input',
  templateUrl: './prod-input.component.html',
  styleUrl: './prod-input.component.css'
})
export class ProdInputComponent implements OnInit {
  
  products: Product[] = [];

  formGroupProduct : FormGroup;

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.service.getProducts().subscribe({
      next: data => this.products = data
    });
  }

  constructor(private formBuilder: FormBuilder, private service: ProductService){
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
