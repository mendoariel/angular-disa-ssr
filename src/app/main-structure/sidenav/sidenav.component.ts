import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenuService } from '../../services/main-menu.service';;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output ('sidenavClick') sidenavClick = new EventEmitter();
  links;

  constructor(private _mainMenu: MainMenuService,
              private _router: Router) { }

  ngOnInit() {
    this.links = this._mainMenu.getMenu();
    setTimeout(() => {
      console.log(this.links);
    }, 2000);
  }

  goTo(url) {
    this.sidenavClick.emit();
    this._router.navigate([url]);
  }

}
