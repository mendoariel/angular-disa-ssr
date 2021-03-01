import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-top-categories-content',
  templateUrl: './top-categories-content.component.html',
  styleUrls: ['./top-categories-content.component.scss']
})
export class TopCategoriesContentComponent implements OnInit {
  title: string = 'Top de categorias'
  categories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categories.push({name: 'Máquinas', picture: 'productos/maquinas.jpeg'});
    this.categories.push({name: 'Aislantes', picture: 'home/aislantes.jpg'});
    this.categories.push({name: 'Terminaciones', picture: 'home/herrajes.jpg'});
    this.categories.push({name: 'Placas', picture: 'home/muchas-placas.jpg'});
    this.categories.push({name: 'Herrajes', picture: 'nosotros/herrajes-01.png'});
    this.categories.push({name: 'Pintura Epoxi', picture: 'nosotros/stock-pintura-01.png'});
    this.categories.push({name: 'Aglomerado', picture: 'nosotros/stock-placas-07.png'});
    this.categories.push({name: 'Adhesivo vinílico', picture: 'productos/adhesivo-vinilico.jpg'});
    this.categories.push({name: 'Goma espuma', picture: 'productos/goma-espuma.jpg'});
    this.categories.push({name: 'Herramientas', picture: 'productos/herramientas-2.jpeg'});
    this.categories.push({name: 'Placas OSB', picture: 'productos/osb.jpg'});
    this.categories.push({name: 'Placas de Yeso', picture: 'productos/placas-de-yeso.jpeg'});
  }

}
