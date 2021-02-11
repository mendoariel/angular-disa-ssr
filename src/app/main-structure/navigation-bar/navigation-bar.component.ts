import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../services/main-menu.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  menu;

  constructor(private _mainMenu: MainMenuService) { }

  ngOnInit() {
    this.menu = this._mainMenu.getMenu();
    setTimeout(() => {
    }, 2000);
  }

}
