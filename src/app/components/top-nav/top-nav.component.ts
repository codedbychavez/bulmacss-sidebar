import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  public sideBarActive: boolean;

  constructor() { 
    this.sideBarActive = false;
   }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideBarActive = !this.sideBarActive;
  }

}
