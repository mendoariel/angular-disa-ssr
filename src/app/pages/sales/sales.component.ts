import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    console.log(environment.name);
    this.getSales();
  }

  getSales(){
    this._api.getSales().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }



}
