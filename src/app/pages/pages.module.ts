import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [HomeComponent, SalesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
