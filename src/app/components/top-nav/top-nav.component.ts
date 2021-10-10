import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  public sideBarActive: boolean;

  public menuItems = [
    {
      "name": "Team Settings",
      "children": []
    },
    {
      "name": "Manage Your Team",
      "children": [
        {
          "name": "Members"
        },
        {
          "name": "plugins"
        },
        {
          "name": "Add a member"
        }
      ]
    },
    {
      "name": "Invations",
      "children": []
    },
    {
      "name": "Cloud Storage Environment Settings",
      "children": []
    },
    {
      "name": "Authentication",
      "children": []
    }
  ]

  // Set to -1 to prevent the first menu item from being selected
  public active = -1;

  constructor() { 
    this.sideBarActive = false;
   }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideBarActive = !this.sideBarActive;
  }

}
