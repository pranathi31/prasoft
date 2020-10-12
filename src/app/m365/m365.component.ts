import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-m365',
  templateUrl: './m365.component.html',
  styleUrls: ['./m365.component.css']
})
export class M365Component implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }

}
