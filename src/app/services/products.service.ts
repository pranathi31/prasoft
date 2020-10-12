import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productdescription:string;
  price:number;
  quantity: number;
  
  

  constructor() { }
}
