import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l11-sidebar',
  templateUrl: './l11-sidebar.component.html',
  styleUrls: ['./l11-sidebar.component.css']
})
export class L11SidebarComponent implements OnInit {
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  log(status: string):void {
    console.log(status);
  }
}
