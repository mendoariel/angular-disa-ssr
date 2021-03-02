import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-most-important-content',
  templateUrl: './most-important-content.component.html',
  styleUrls: ['./most-important-content.component.scss']
})
export class MostImportantContentComponent implements OnInit {
  alphaContain: any;
  betaContain: any;
  constructor() { }

  ngOnInit(): void {
    this.putContent();
  }

  putContent() {
    this.alphaContain = {
      h3: 'Conoce como comprar en linea',

      p: 'Cada vez llevamos más tiempo en esto, y cada vez tenemos mas productos y serivicios para ofrecer.En esta página puedes concer todos los pruductos con los que cuenta nuestra empresa',

      button: 'VER Ofertas'

    }

    this.betaContain = {
      h3: '#QuedateEnCasa!!!',

      p: 'Estamos para ayudarte para que puedas comprar lo que necesitas desde la tranquilidad de tu casa.',

      button: 'Como comprar'

    }
  }

}


