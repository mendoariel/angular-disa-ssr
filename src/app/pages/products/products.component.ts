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
    // 1
    this.shelve.push({ 
      name: 'Melamina sobre MDF', 
      img: '/assets/productos/melamina-sobre-mdf.jpg'
    });
    // 2
    this.shelve.push({ 
      name: 'Placa de alto brillo', 
      img: '/assets/productos/placa-alto-brillo.jpeg'
    });

    // 3
    this.shelve.push({ 
      name: 'Melamina sobre aglomerado', 
      img: '/assets/productos/melamina-sobre-aglomerado.jpg'
    });

    // 4 
    this.shelve.push({ 
      name: 'Fibro plus', 
      img: '/assets/productos/fibroplus.jpeg'
    });

    // 5
    this.shelve.push({ 
      name: 'Tablero enchapado', 
      img: '/assets/productos/tablero-enchapado.jpg'
    });

    // 6
    this.shelve.push({  
      name: 'Herrajes', 
      img: '/assets/productos/herrajes2.jpg'
    });

    // 7 
    this.shelve.push({ 
      name: 'Tableros de pino', 
      img: '/assets/productos/tablero-pino.jpg'
    });
    
    // 8
    this.shelve.push({ 
      name: 'Fenólico', 
      img: '/assets/productos/placas-multilaminados-fenolico.jpg'
    });

    // 9 
    this.shelve.push({ 
      name: 'OSB', 
      img: '/assets/productos/osb.jpg'
    });

    // 10
    this.shelve.push({ 
      name: 'Cantos de PVC', 
      img: '/assets/productos/cantos-pvc.jpg'
    });
    
    // 11
    this.shelve.push({ 
      name: 'Canto melamínico', 
      img: '/assets/productos/cantos-melamina.jpg'
    });

    // 12 
    this.shelve.push({  
      name: 'Placas de yeso', 
      img: '/assets/productos/placas-de-yeso.jpeg'
    });

    // 13
    this.shelve.push({  
      name: 'Masilla', 
      img: '/assets/productos/masilla.jpg'
    });

    // 14
    this.shelve.push({  
      name: 'Montante y solera', 
      img: '/assets/productos/montante-y-solera.jpg'
    });

    // 15 
    this.shelve.push({ 
      name: 'Adhesivo vinílico', 
      img: '/assets/productos/adhesivo-vinilico.jpg'
    });

    // 16
    this.shelve.push({  
      name: 'Piso flotante', 
      img: '/assets/productos/piso-flotante.png'
    });

    // 17 
    this.shelve.push({  
      name: 'Herramientas y máquinas', 
      img: '/assets/productos/maquinas.jpeg'
    });

    // 18
    this.shelve.push({  
      name: 'Goma espuma', 
      img: '/assets/productos/goma-espuma.jpg'
    });
    
  }

}
