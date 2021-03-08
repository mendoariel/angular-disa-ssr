import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'disa-most-important-content',
  templateUrl: './most-important-content.component.html',
  styleUrls: ['./most-important-content.component.scss']
})
export class MostImportantContentComponent implements OnInit {
  alphaContain: any;
  betaContain: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.putContent();
  }

  navigateProducts() {
    this._router.navigate(['/productos'])
  }

  putContent() {
    this.alphaContain = {
      h3: 'Productos disponibles',

      p: 'Cada vez llevamos más tiempo en esto, y cada vez tenemos mas productos y servicios para ofrecer.  En esta página puedes concer todos los pruductos',

      button: 'VER PRODUCTOS'

    }

    this.betaContain = {
      h3: '#QuedateEnCasa!!!',

      p: 'Estamos para ayudarte para que puedas comprar lo que necesitas desde la tranquilidad de tu casa.',

      button: 'Como comprar'

    }
  }

}


