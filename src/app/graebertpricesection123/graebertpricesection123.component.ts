import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graebertpricesection123',
  templateUrl: './graebertpricesection123.component.html',
  styleUrls: ['./graebertpricesection123.component.css']
})
export class Graebertpricesection123Component implements OnInit {
  productprice:number=75000;
  price:number=NaN;
  gst:number=NaN;
  totalprice:number=NaN;
  price2: number=NaN;
  productprice2:number=203000;
  gst2: number;
  totalprice2: number;
  price3: number=NaN;
  productprice3:number=203000;
  gst3: number;
  totalprice3: number;

  constructor() { }
  quantity:number=1;
  i:number=1;
  plus()
  {
    if(this.i !=100)
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

  quantity2:number=1;
  x:number=1;
  add()
  {
    if(this.x !=100)
    {
      this.x++;
      this.quantity2=this.x;
    }
    this.ngOnInit();
  }
  sub()
  {
    if(this.x !=1)
    {
      this.x--;
      this.quantity2=this.x;
    }
    this.ngOnInit();
  }

  quantity3:number=1;
  y:number=1;
  a()
  {
    if(this.y !=100)
    {
      this.y++;
      this.quantity3=this.y;
    }
    this.ngOnInit();
  }
  s()
  {
    if(this.y !=1)
    {
      this.y--;
      this.quantity3=this.y;
    }
    this.ngOnInit();
  }



  ngOnInit(): void {
    this.price=this.productprice*this.quantity;
this.gst=0.18*this.price;
this.totalprice=this.price+this.gst;

this.price2=this.productprice2*this.quantity2;
this.gst2=0.18*this.price2;
this.totalprice2=this.price2+this.gst2;

this.price3=this.productprice3*this.quantity3;
this.gst3=0.18*this.price3;
this.totalprice3=this.price3+this.gst3;
  }

}
