import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppMaterialModule } from './app-material/app-material.module';
import { PagesModule } from './pages/pages.module';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { OffersComponent } from './pages/offers/offers.component';
import { DisaServicesComponent } from './pages/disa-services/disa-services.component';
import { FooterComponent } from './main-structure/footer/footer.component';
import { HeaderComponent } from './main-structure/header/header.component';
import { SidenavComponent } from './main-structure/sidenav/sidenav.component';
import { NavigationBarComponent } from './main-structure/navigation-bar/navigation-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    DisaServicesComponent,
    FooterComponent,
    HeaderComponent,
    NavigationBarComponent,
    OffersComponent,
    ProductsComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    PagesModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
