import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
