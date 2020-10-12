import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microsoftpricesection1',
  templateUrl: './microsoftpricesection1.component.html',
  styleUrls: ['./microsoftpricesection1.component.css']
})
export class Microsoftpricesection1Component implements OnInit {

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

  price4: number;
  productprice4: number =203000;
  totalprice4: number;
  gst4: number;
  
  totalprice5: number;
  price5: number;
  gst5: number;
  productprice5: number=203000;
  

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

   quantity4:number=1;
  z:number=1;
  less()
  {
    if(this.z !=100)
    {
      this.z++;
      this.quantity4=this.z;
    }
    this.ngOnInit();
  }
  more()
  {
    if(this.z !=1)
    {
      this.z--;
      this.quantity4=this.z;
    }
    this.ngOnInit();
  }

  quantity5:number=1;
  p:number=1;
  addition()
  {
    if(this.p !=100)
    {
      this.p++;
      this.quantity5=this.p;
    }
    this.ngOnInit();
  }
  substraction()
  {
    if(this.p !=1)
    {
      this.p--;
      this.quantity5=this.p;
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

 this.price4=this.productprice4*this.quantity4;
 this.gst4=0.18*this.price4;
 this.totalprice4=this.price4+this.gst4;

 this.price5=this.productprice5*this.quantity5;
 this.gst5=0.18*this.price5;
this.totalprice5=this.price5+this.gst5;
  }

}

