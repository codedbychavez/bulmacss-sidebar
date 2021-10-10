import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bulmacss-sidebar';
  public sideBarActive: boolean;

  constructor() {
    this.sideBarActive = false;
  }

  toggleSideBar() {
    this.sideBarActive = !this.sideBarActive;
  }
}
