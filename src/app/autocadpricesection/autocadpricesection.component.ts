import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autocadpricesection',
  templateUrl: './autocadpricesection.component.html',
  styleUrls: ['./autocadpricesection.component.css']
})
export class AutocadpricesectionComponent implements OnInit {
  isActive = true;
  productprice:number=75000;
  productquantity:number;
  price:number=NaN;
  gst:number=NaN;
  totalprice:number=NaN;
  price2: number=NaN;
  productprice2:number=203000;
  gst2: number;
  totalprice2: number;

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




  ngOnInit(): void {
    
//console.log("productprice:" +this.price);
this.price=this.productprice*this.quantity;
this.gst=0.18*this.price;
this.totalprice=this.price+this.gst;

this.price2=this.productprice2*this.quantity2;
this.gst2=0.18*this.price2;
this.totalprice2=this.price2+this.gst2;
  }

}
