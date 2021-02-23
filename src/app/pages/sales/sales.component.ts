import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  spinner: boolean;
  sales: any[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.spinner = true;
    // console.log(environment.name);
    //setTimeout(() => this.getSales(), 3000);

    this.getSales()
  }

  getSales(){
    this._api.getSales().subscribe(
      res => {
        this.spinner = false;
        this.sales = res;
        console.log(this.sales)
      },
      error => {
        this.spinner = false;
        console.log(error)
      }
    )
  }



}
