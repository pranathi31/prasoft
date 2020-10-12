import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdobecartService {
  productname:string;
  productdescription:string;
  path:string;
  url:string;
  constructor() { }
}
