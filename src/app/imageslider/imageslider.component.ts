import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  images = [  
     { img: "../assets/Home Slider1.jpg" },
    { img: "../assets/Home Slider2.jpg" },  
    { img: "../assets/Home Slider3.jpg" }, 
    
  ];
    slideConfig = {  
      "slidesToShow": 1,  
      "slidesToScroll": 1,  
       
      "infinite": true , 
      "autoplay": true,
      "autoplaySpeed": 2000,
      "fade": true,
  "cssEase": 'linear'
    };  

  constructor() { }

  ngOnInit(): void {
  }

}
