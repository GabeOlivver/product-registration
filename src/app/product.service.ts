import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/products";

  constructor() { }
}
