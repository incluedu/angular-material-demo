import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-l20-select',
  templateUrl: './l20-select.component.html',
  styleUrls: ['./l20-select.component.css']
})
export class L20SelectComponent implements OnInit {
  selectedValue = 'not selected';
  selectedValue2: '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
