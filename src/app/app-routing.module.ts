import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { SoftwareComponent } from './software/software.component';

import {AdobeComponent } from './adobe/adobe.component';
import{WpsbuyComponent} from './wpsbuy/wpsbuy.component';
import{AdobecartoptionsComponent} from './adobecartoptions/adobecartoptions.component';
import{AutocadComponent} from './autocad/autocad.component';
import{GraebertComponent} from './graebert/graebert.component';
import { GraebertproductsComponent } from './graebertproducts/graebertproducts.component';
import{CoreldrawComponent} from './coreldraw/coreldraw.component';
import{MicrrosoftComponent} from './micrrosoft/micrrosoft.component';
import{Windows10Component} from './windows10/windows10.component';
import { VisualstudioComponent } from './visualstudio/visualstudio.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';
import { Officepp2019Component } from './officepp2019/officepp2019.component';
import { Std2019Component } from './std2019/std2019.component';
import { M365Component } from './m365/m365.component';
import {CoreldrawpricesectionComponent} from './coreldrawpricesection/coreldrawpricesection.component';
import{AutocadpricesectionComponent} from './autocadpricesection/autocadpricesection.component';
import{Graebertpricesection123Component} from './graebertpricesection123/graebertpricesection123.component';
import{Graebertpricesection4Component} from './graebertpricesection4/graebertpricesection4.component';
import{Graebertpricesection5Component} from './graebertpricesection5/graebertpricesection5.component';
import{Microsoftpricesection1Component} from './microsoftpricesection1/microsoftpricesection1.component';
import{Microsoftpricesection2Component} from './microsoftpricesection2/microsoftpricesection2.component';
import{Microsoftpricesection3Component} from './microsoftpricesection3/microsoftpricesection3.component';
import{Microsoftpricesection4Component} from './microsoftpricesection4/microsoftpricesection4.component';
import{Microsoftpricesection5Component} from './microsoftpricesection5/microsoftpricesection5.component';
import{M365pricesection1Component} from './m365pricesection1/m365pricesection1.component';
import{M365pricesection2Component} from './m365pricesection2/m365pricesection2.component';
import{M365pricesection3Component} from './m365pricesection3/m365pricesection3.component';
import{M365pricesection4Component} from './m365pricesection4/m365pricesection4.component';



  

const routes: Routes = [
  {path:'',redirectTo: '/about',pathMatch:'full'},
  
  {path: 'about' , component:AboutComponent},
  {path : 'software' , component:SoftwareComponent},
  
  
  
  {path: 'adobe', component:AdobeComponent},
{path:'wpsbuy', component:WpsbuyComponent},
{path:'adobecartoptions', component:AdobecartoptionsComponent},
{path:'autocad',component:AutocadComponent},
{path:'graebert',component:GraebertComponent},
{path:'graebertproducts',component:GraebertproductsComponent},
{path:'coreldraw',component:CoreldrawComponent},
{path:'micrrosoft',component:MicrrosoftComponent},
{path:'windows10',component:Windows10Component},
{path:'sqlserver',component:SqlserverComponent},
{path:'m365',component:M365Component},
{path:'visualstudio',component:VisualstudioComponent},
{path:'std2019',component:Std2019Component},
{path:'officepp2019',component:Officepp2019Component},
{path:'coreldrawpricesection',component:CoreldrawpricesectionComponent},
{path:'autocadpricesection' , component:AutocadpricesectionComponent},
{path:'graebertpricesection123' , component:Graebertpricesection123Component},
{path:'graebertpricesection4' , component:Graebertpricesection4Component},
{path:'graebertpricesection5' , component:Graebertpricesection5Component},
{path:'microsoftpricesection1' , component:Microsoftpricesection1Component},
{path:'microsoftpricesection2' , component:Microsoftpricesection2Component},
{path:'microsoftpricesection3' , component:Microsoftpricesection3Component},
{path:'microsoftpricesection4' , component:Microsoftpricesection4Component},
{path:'microsoftpricesection5' , component:Microsoftpricesection5Component},
{path:'m365pricesection1',component:M365pricesection1Component},
{path:'m365pricesection2',component:M365pricesection2Component},
{path:'m365pricesection3',component:M365pricesection3Component},
{path:'m365pricesection4',component:M365pricesection4Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ AboutComponent, SoftwareComponent ,AdobeComponent,WpsbuyComponent,AdobecartoptionsComponent,AutocadComponent,GraebertComponent,
  GraebertproductsComponent,CoreldrawComponent,MicrrosoftComponent,
  Windows10Component,VisualstudioComponent,SqlserverComponent,Officepp2019Component,
  Std2019Component,M365Component,CoreldrawpricesectionComponent,AutocadpricesectionComponent,
  Graebertpricesection123Component,Graebertpricesection4Component,Graebertpricesection5Component,
  Microsoftpricesection1Component,Microsoftpricesection2Component,Microsoftpricesection3Component,Microsoftpricesection4Component,Microsoftpricesection5Component,
  M365pricesection1Component,M365pricesection2Component,M365pricesection3Component,M365pricesection4Component

]