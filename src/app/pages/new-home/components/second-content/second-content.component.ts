import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.scss']
})
export class SecondContentComponent implements OnInit {
  items: any[] = [];
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.buildInfo();
  }

  buildInfo() {
    this.title = 'Productos mas vendidos';

    this.items.push({ title: 'Aglomerado', description: 'Placas de aglomerado', img: 'nosotros/stock-placas-01.png'});
    this.items.push({ title: 'Aglomerado', description: 'Placas de aglomerado', img: 'nosotros/stock-placas-01.png'});
    this.items.push({ title: 'Aglomerado', description: 'Placas de aglomerado', img: 'nosotros/stock-placas-01.png'});
    this.items.push({ title: 'Aglomerado', description: 'Placas de aglomerado', img: 'nosotros/stock-placas-01.png'});
  }

}
