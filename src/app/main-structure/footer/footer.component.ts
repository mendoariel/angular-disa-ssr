import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  phone = 5492615597977;
  title = "Mi first prove";

  constructor() { }

  ngOnInit() {
  }

}
