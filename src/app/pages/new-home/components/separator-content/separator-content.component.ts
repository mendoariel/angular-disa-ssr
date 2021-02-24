import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disa-separator-content',
  templateUrl: './separator-content.component.html',
  styleUrls: ['./separator-content.component.scss']
})
export class SeparatorContentComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "hola gatitos";

  }

}
