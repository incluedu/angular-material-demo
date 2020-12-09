import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-l28-virtual-scrolling',
  templateUrl: './l28-virtual-scrolling.component.html',
  styleUrls: ['./l28-virtual-scrolling.component.css']
})
export class L28VirtualScrollingComponent implements OnInit {
  numbers = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
