import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor() { }

  getMenu() {
    let menu;
    menu = [];
    menu.push({name: 'Inicio', url: 'home'});
    menu.push({name: 'Ventas en linea', url: 'ventas'});
    menu.push({name: 'Productos', url: 'productos'});
    menu.push({name: 'Servicios', url: 'servicios'});
    menu.push({name: 'Nosotros', url: 'nosotros'});
    menu.push({name: 'Contacto', url: 'contacto'});
    //console.log(menu);
    return menu;
  }
}
