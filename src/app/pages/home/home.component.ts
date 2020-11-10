import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shelve: any[] = [];

  constructor() { }

  ngOnInit() {
    this.buildData();
  }

  buildData() {
    this.shelve.push({ 
      name: 'TABLERO ENCHAPADO', 
      img: 'https://disainsumos.com/wp-content/uploads/2019/12/Tablero-enchapado-1024x706.jpg'
    });
    this.shelve.push({ 
      name: 'MELAMINA SOBRE AGLOMERADO', 
      img: 'https://disainsumos.com/wp-content/uploads/2019/05/Ej-de-melamina.jpg'
    });
  }

}
