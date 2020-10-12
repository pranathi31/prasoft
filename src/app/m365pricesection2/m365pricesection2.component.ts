import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m365pricesection2',
  templateUrl: './m365pricesection2.component.html',
  styleUrls: ['./m365pricesection2.component.css']
})
export class M365pricesection2Component implements OnInit {

  productprice:number=75000;
  price:number=NaN;
  gst:number=NaN;
  totalprice:number=NaN;

  

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

  



  ngOnInit(): void {
    this.price=this.productprice*this.quantity;
this.gst=0.18*this.price;
this.totalprice=this.price+this.gst;


  }

}
