import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-wpspremium',
  templateUrl: './wpspremium.component.html',
  styleUrls: ['./wpspremium.component.css']
})
export class WpspremiumComponent implements OnInit {
  productdescription:string;
  productprice:number=NaN;
  productquantity:number;
  price:number=NaN;
  gst:number=NaN;
  totalprice:number=NaN;
  
  constructor(private _productsservice:ProductsService) { }
  

  
  quantity:number=1;
  i:number=1;
  plus()
  {
    if(this.i !=10)
    {
      this.i++;
      this.quantity=this.i;
    }
    this.ngOnInit();
  }
  minus()
  {
    if(this.i !=1)
    {
      this.i--;
      this.quantity=this.i;
    }
    this.ngOnInit();
  }










  ngOnInit(): void {
    this.productdescription=this._productsservice.productdescription;
    this.productprice=this._productsservice.price;
    this.productquantity=this._productsservice.quantity;
//console.log("productprice:" +this.price);
this.price=this.productprice*this.quantity;
this.gst=0.18*this.price;
this.totalprice=this.price+this.gst;

  }
  
  

  


  

}
