import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-black-content',
  templateUrl: './black-content.component.html',
  styleUrls: ['./black-content.component.scss']
})
export class BlackContentComponent implements OnInit {
  text1: string;
  text2: string;
  
  constructor() { }
  
  ngOnInit(): void {
    this.text1 = "Ver las ofertas";
    this.text2 = "Conoce nuestra aplicación";
  }

}