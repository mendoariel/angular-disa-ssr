import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-separator-content',
  templateUrl: './separator-content.component.html',
  styleUrls: ['./separator-content.component.scss']
})
export class SeparatorContentComponent implements OnInit {
  title: string;
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "hola gatitos";
    this.text = "Venta de materiales para la fabricación de muebles, sillas y la construcción en seco. \nServicios de cortes de placas y pegado de canto."
  }

}
