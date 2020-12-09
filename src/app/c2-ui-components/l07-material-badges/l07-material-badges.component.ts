import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l07-material-badges',
  templateUrl: './l07-material-badges.component.html',
  styleUrls: ['./l07-material-badges.component.css']
})
export class L07MaterialBadgesComponent implements OnInit {
  notifications = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
