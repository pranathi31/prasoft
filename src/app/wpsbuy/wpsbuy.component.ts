import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-wpsbuy',
  templateUrl: './wpsbuy.component.html',
  styleUrls: ['./wpsbuy.component.css']
})
export class WpsbuyComponent implements OnInit {

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    
  }

}
