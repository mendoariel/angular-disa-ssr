import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.scss']
})
export class SecondContentComponent implements OnInit {
  items1: any[] = [];
  items2: any[] = [];
  image: any[] = [];
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.buildInfo();
  }

  buildInfo() {
    this.title = 'DISA Insumos Industriales';

    this.items1.push({ title: 'Aglomerado', description: 'Placas de aglomerado', img: 'nosotros/stock-placas-01.png'});
    this.items1.push({ title: 'Adhesivos', description: 'Pegamentos y tornillos', img: 'contacto/contacto.png'});
    this.items2.push({ title: 'Cortes', description: 'Cortes a medida, con máquinas de gran precisión', img: 'home/cortes.jpg'});
    this.items2.push({ title: 'Gran Stock', description: 'Contamos con gran stock para su obra', img: 'home/muchas-placas.jpg'});

    this.image.push({ title: 'Cantos melamina', description: 'Para construir tus muebles', img: 'productos/cantos-melamina.jpg'});
    this.image.push({ title: 'Cantos pvc', description: 'Durabilidad colore brillantes', img: 'productos/cantos-pvc.jpg'});
  }

}
