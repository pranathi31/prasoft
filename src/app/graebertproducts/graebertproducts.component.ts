import { Component, OnInit } from '@angular/core';
import { GraebertService } from '../graebert.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-graebertproducts',
  templateUrl: './graebertproducts.component.html',
  styleUrls: ['./graebertproducts.component.css']
})
export class GraebertproductsComponent implements OnInit {
  productname:string="";
productdescription:string="";
path:string="";

serviceurl;
url;

  constructor(private _graebert:GraebertService ,private _sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.serviceurl=this._graebert.url;
    this.url =this._sanitizer.bypassSecurityTrustResourceUrl(this.serviceurl);
    this.productname=this._graebert.productname;
    this.productdescription=this._graebert.productdescription;
    this.path=this._graebert.path;
  }

}
