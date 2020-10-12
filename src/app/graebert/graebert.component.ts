import { Component, OnInit } from '@angular/core';
import { GraebertService } from '../graebert.service';


@Component({
  selector: 'app-graebert',
  templateUrl: './graebert.component.html',
  styleUrls: ['./graebert.component.css']
})
export class GraebertComponent implements OnInit {
  a="ARES Comander";
  b="ARES Touch";
  c="ARES Kudo";
  d="ARES Mechanical";
  e="ARES Map";
  ad="Experience the agility of ARES Commander to create and modify DWG drawings in 2D and 3D on your computers. Leverage the drafting and design features that you’ve come to expect for your DWG files, at a significant cost savings. ARES Commander brings your productivity to the next level with smart productivity tools and a unique concept: The Trinity of CAD™";
  bd="Discover the most advanced Mobile App for CAD in DWG ARES Touch is the most complete CAD solution ever seen for your mobile device. Create and modify your DWG drawings on tablets and smartphones with a complete set of 2d drafting and annotation commands at hand. Its a full-featured Mobile CAD App that fits into your pocket and the perfect companion to quickly review a drawing shared in the cloud or received by email while on the go.";
  cd="THE CLOUD’S MOST AGILE CAD SOLUTION FOR DWG DRAWINGS With ARES Kudo your DWG drawings follow you on any device. Nothing to install, you just need an Internet browser to access, share and modify your CAD files online, anywhere, anytime.";
  dd="ARES Mechanical is a Mechanical CAD software combining the DWG-editing features of ARES Commander with industry-specific features for 2D Mechanical Design.It is an intuitive, fully customizable and comprehensive CAD solution for Mechanical CAD designers and engineers";
  ed="A CAD SOFTWARE WITH GIS-ENABLED FEATURES: GET THE BEST OF BOTH WORLDS ARES® Map™ as a hybrid solution is bringing together the intelligence of GIS contents and a full-featured DWG-based CAD system. Maps and floorplans created with ARES Map are saved natively in DWG but can also contain smart GIS-enabled information associated to the entities";

  isActive=true;
  _productname: any;

  constructor(private _graebert:GraebertService) { }

  ngOnInit(): void {
  }
  arescommander()
  {
    console.log("adobename"+ this.a);
    this._graebert.productname=this.a;
    this._graebert.productdescription=this.ad;
    this._graebert.url='https://www.youtube.com/embed/Mm96GRKlbDY';
    this._graebert.path='./assets/arescommander.jpg';
  }
  arestouch()
  {
    console.log("adobename"+ this.b);
    this._graebert.productname=this.b;
    this._graebert.productdescription=this.bd;
    this._graebert.url='https://www.youtube.com/embed/oEp9rBw2gBs';
    this._graebert.path='./assets/arestouch.jpg';
  }
  areskudo()
  {
    console.log("adobename"+ this.c);
    this._graebert.productname=this.c;
    this._graebert.productdescription=this.cd;
    this._graebert.url='https://www.youtube.com/embed/W-dQwQGAOro';
    this._graebert.path='./assets/areskudo.jpg';
  }
  aresmechanical()
  {
    console.log("adobename"+ this.d);
    this._graebert.productname=this.d;
    this._graebert.productdescription=this.dd;
    this._graebert.url='https://www.youtube.com/embed/yk15tlH2YoQ';
    this._graebert.path='';
  }
  aresmap()
  {
    console.log("adobename"+ this.e);
    this._graebert.productname=this.e;
    this._graebert.productdescription=this.ed;
    this._graebert.url='https://www.youtube.com/embed/1lr6lYONmYg';
    this._graebert.path='./assets/aresmap.jpg';
  }
}
