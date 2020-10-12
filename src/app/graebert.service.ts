import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraebertService {
  productname:string;
  productdescription:string;
  path:string;
  url:string;

  constructor() { }
}
