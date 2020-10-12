import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AdobecartService } from '../adobecart.service';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-adobecartoptions',
  templateUrl: './adobecartoptions.component.html',
  styleUrls: ['./adobecartoptions.component.css']
})
export class AdobecartoptionsComponent implements OnInit {
productname:string="";
productdescription:string="";
path:string="";

serviceurl;
url;

  constructor(private _productname:AdobecartService, private _sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.serviceurl=this._productname.url;
    this.url =this._sanitizer.bypassSecurityTrustResourceUrl(this.serviceurl);
    this.productname=this._productname.productname;
    this.productdescription=this._productname.productdescription;
    this.path=this._productname.path;
    

  }
  /*@ViewChild('player') player:any;
videoId:string;

@Input()
set id(id:string)
{
  this.videoId=id;

}
onReady(event)
{
this.player.mute();
this.player.playVideo();
}
onStateChange(event)
{
  if(event.data==0)
  {
    this.player.playVideo();
  }
}


  /*video()
  {
    console.log('im play!');
    this.videoplayer?.play();
  }*/

  quantity:number=1;
  i=1;
  
  plus()
  {
    if(this.i !=10)
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
  
}
