import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DisaServicesComponent } from './pages/disa-services/disa-services.component';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'ofertas',
    component: OffersComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'servicios',
    component: DisaServicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
