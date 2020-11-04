import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { PagesModule } from './pages/pages.module';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DisaServicesComponent } from './pages/disa-services/disa-services.component';
import { FooterComponent } from './main-structure/footer/footer.component';
import { HeaderComponent } from './main-structure/header/header.component';
import { SidenavComponent } from './main-structure/sidenav/sidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    OffersComponent,
    ContactComponent,
    DisaServicesComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
