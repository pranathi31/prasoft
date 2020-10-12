import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'
  ]
})
export class SoftwareComponent implements OnInit {
   wpsname="WPS Premium";
  busname="Business For";
  profname="Proffessional";
  wpsprice:number=100;
  busprice:number=200;
  profprice:number=300;
  isActive = true;
  public titleStyles={
    color:"black",
    
  }
  
  constructor( private _productsservice:ProductsService) { 

  }

  ngOnInit(): void {
  }
  /*quantity:number=1;
  i=1;
  plus()
  {
    if(this.i !=5)
    {
      this.i++;
      this.quantity=this.i;
    }
  }
  minus()
  {
    if(this.i !=1)
    {
      this.i--;
      this.quantity=this.i;
    }
  }
  q:number=1;
  x=1;
  p()
  {
    if(this.x !=5)
    {
      this.x++;
      this.q=this.x;
    }
  }
  m()
  {
    if(this.x !=1)
    {
      this.x--;
      this.q=this.x;
    }
  }
  qt:number=1;
  y=1;
  add()
  {
    if(this.y !=5)
    {
      this.y++;
      this.qt=this.y;
    }
  }
  subtract()
  {
    if(this.y !=1)
    {
      this.y--;
      this.qt=this.y;
    }
  }*/
wpsbuynow()
{
  this._productsservice.productdescription=this.wpsname;
  this._productsservice.price=this.wpsprice;
  console.log("inwpsmethod"+this.wpsprice);
  //this._productsservice.quantity=this.quantity;
}
busfor()
{
  this._productsservice.productdescription=this.busname;
  this._productsservice.price=this.busprice;
  //this._productsservice.quantity=this.q;
}
professional()
{
  this._productsservice.productdescription=this.profname;
  this._productsservice.price=this.profprice;
  //this._productsservice.quantity=this.qt;
}
}
