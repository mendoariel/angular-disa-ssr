import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  shelve: any[] = [];

  constructor() { }

  ngOnInit() {
    this.buildData();
  }

  buildData() {
    this.shelve.push({ 
      name: 'Melamina sobre aglomerado', 
      img: '/assets/productos/melamina-sobre-aglomerado.jpg'
    });
    this.shelve.push({ 
      name: 'Melamina sobre MDF', 
      img: '/assets/productos/melamina-sobre-mdf.jpg'
    });
    this.shelve.push({ 
      name: 'Cantos de PVC', 
      img: '/assets/productos/cantos-pvc.jpg'
    });
    this.shelve.push({ 
      name: 'Tablero enchapado', 
      img: '/assets/productos/tablero-enchapado.jpg'
    });
    this.shelve.push({ 
      name: 'Canto melamínico', 
      img: '/assets/productos/cantos-melamina.jpg'
    });
    this.shelve.push({ 
      name: 'Tableros de pino', 
      img: '/assets/productos/tablero-pino.jpg'
    });
    this.shelve.push({ 
      name: 'Adhesivo vinílico', 
      img: '/assets/productos/adhesivo-vinilico.jpg'
    });
    this.shelve.push({ 
      name: 'Tableros osb', 
      img: '/assets/productos/osb.jpg'
    });
    this.shelve.push({ 
      name: 'Fibro puls', 
      img: '/assets/productos/folio.jpg'
    });
    this.shelve.push({ 
      name: 'Fibro puls', 
      img: '/assets/productos/placas-multilaminados-fenolico.jpg'
    });
    this.shelve.push({  
      name: 'Placa de yeso. Resistente al fuego', 
      img: '/assets/productos/resistente-al-fuego.jpg'
    });
    this.shelve.push({  
      name: 'Placa de yeso. Resistente a la humedad', 
      img: '/assets/productos/resistente-a-la-humedad.jpg'
    });
    this.shelve.push({  
      name: 'Placa de yeso. Multiproposito', 
      img: '/assets/productos/placa-de-yeso-multiproposito.jpg'
    });
    this.shelve.push({  
      name: 'Placa de yeso. Cielo raso', 
      img: '/assets/productos/placa-de-yeso-cielo-raso-desmontable.jpg'
    });
    this.shelve.push({  
      name: 'Placa de yeso. Revoque seco', 
      img: '/assets/productos/placa-de-yeso-revoque-seco.jpg'
    });
    this.shelve.push({  
      name: 'Montante y solera', 
      img: '/assets/productos/montante-y-solera.jpg'
    });
    this.shelve.push({  
      name: 'Masilla', 
      img: '/assets/productos/masilla.jpg'
    });
    this.shelve.push({  
      name: 'Piso flotante', 
      img: '/assets/productos/piso-flotante.png'
    });
    this.shelve.push({  
      name: 'Goma espuma', 
      img: '/assets/productos/goma-espuma.jpg'
    });
    this.shelve.push({  
      name: 'Herramientas', 
      img: '/assets/productos/herramientas.jpg'
    });
    this.shelve.push({  
      name: 'Maquinas de mano', 
      img: '/assets/productos/maquinas-de-mano.jpg'
    });
    this.shelve.push({  
      name: 'Herrajes', 
      img: '/assets/productos/herrajes.jpg'
    });
  }

}
