import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-last-content',
  templateUrl: './last-content.component.html',
  styleUrls: ['./last-content.component.scss']
})
export class LastContentComponent implements OnInit {
  textContact: string;
  textFollowUs: string;
  textOffers: string;
  constructor() { }

  ngOnInit(): void {
    this.textContact = 'Mantente en contacto';
    this.textOffers = 'Recibe todas las ofertas y promociones'
    this.textFollowUs = 'Síguenos';
  }

}
