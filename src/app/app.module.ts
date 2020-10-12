import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatVideoModule} from 'mat-video'
import{MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatIconModule} from '@angular/material/icon';
import{MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { routingComponents } from './app-routing.module';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import {MatMenuModule} from '@angular/material/menu';
import{MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { WpsbuyComponent } from './wpsbuy/wpsbuy.component';
import { WpspremiumComponent } from './wpspremium/wpspremium.component';
import {MatRadioModule} from '@angular/material/radio';
import { ProductsService } from './services/products.service';
import { AdobecartoptionsComponent } from './adobecartoptions/adobecartoptions.component';
import { AdobecartService } from './adobecart.service';
import{YouTubePlayerModule} from '@angular/youtube-player';
import { AutocadComponent } from './autocad/autocad.component';
import { GraebertComponent } from './graebert/graebert.component';
import { GraebertService } from './graebert.service';
import { GraebertproductsComponent } from './graebertproducts/graebertproducts.component';
import { CoreldrawComponent } from './coreldraw/coreldraw.component';
import { MicrrosoftComponent } from './micrrosoft/micrrosoft.component';
import { Windows10Component } from './windows10/windows10.component';
import { Std2019Component } from './std2019/std2019.component';
import { Officepp2019Component } from './officepp2019/officepp2019.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';
import { VisualstudioComponent } from './visualstudio/visualstudio.component';
import { M365Component } from './m365/m365.component';
import{MatExpansionModule} from '@angular/material/expansion';
import { CoreldrawpricesectionComponent } from './coreldrawpricesection/coreldrawpricesection.component';
import { AutocadpricesectionComponent } from './autocadpricesection/autocadpricesection.component';
import { Graebertpricesection123Component } from './graebertpricesection123/graebertpricesection123.component';
import { Graebertpricesection4Component } from './graebertpricesection4/graebertpricesection4.component';
import { Graebertpricesection5Component } from './graebertpricesection5/graebertpricesection5.component';
import { Microsoftpricesection1Component } from './microsoftpricesection1/microsoftpricesection1.component';
import { Microsoftpricesection2Component } from './microsoftpricesection2/microsoftpricesection2.component';
import { Microsoftpricesection3Component } from './microsoftpricesection3/microsoftpricesection3.component';
import { Microsoftpricesection4Component } from './microsoftpricesection4/microsoftpricesection4.component';
import { Microsoftpricesection5Component } from './microsoftpricesection5/microsoftpricesection5.component';
import { M365pricesection1Component } from './m365pricesection1/m365pricesection1.component';
import { M365pricesection2Component } from './m365pricesection2/m365pricesection2.component';
import { M365pricesection3Component } from './m365pricesection3/m365pricesection3.component';
import { M365pricesection4Component } from './m365pricesection4/m365pricesection4.component';
import {MatTabsModule} from '@angular/material/tabs';



const MaterialComponents =[MatButtonModule,
  MatToolbarModule,
MatButtonToggleModule,
SlickCarouselModule,
MatIconModule,
MatBadgeModule,
MatProgressSpinnerModule,
MatSidenavModule,
FormsModule,
MatListModule,
MatDividerModule,
MatGridListModule,
FlexLayoutModule,
MatRadioModule,
ReactiveFormsModule,
MatMenuModule,
MatCardModule,
MatVideoModule,
YouTubePlayerModule,
MatExpansionModule,
MatTabsModule
];
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ImagesliderComponent,
    FooterComponent,
    WpsbuyComponent,
    WpspremiumComponent,
    AdobecartoptionsComponent,
    AutocadComponent,
    GraebertComponent,
    GraebertproductsComponent,
    CoreldrawComponent,
    MicrrosoftComponent,
    Windows10Component,
    Std2019Component,
    Officepp2019Component,
    SqlserverComponent,
    VisualstudioComponent,
    M365Component,
    CoreldrawpricesectionComponent,
    AutocadpricesectionComponent,
    Graebertpricesection123Component,
    Graebertpricesection4Component,
    Graebertpricesection5Component,
    Microsoftpricesection1Component,
    Microsoftpricesection2Component,
    Microsoftpricesection3Component,
    Microsoftpricesection4Component,
    Microsoftpricesection5Component,
    M365pricesection1Component,
    M365pricesection2Component,
    M365pricesection3Component,
    M365pricesection4Component,
    
    
    
    
    
    
  
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents
    

    ],
  exports: [MaterialComponents],
  
  schemas:[
CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ProductsService,
    AdobecartService,
    GraebertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
