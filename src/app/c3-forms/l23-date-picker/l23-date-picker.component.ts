import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-l23-date-picker',
  templateUrl: './l23-date-picker.component.html',
  styleUrls: ['./l23-date-picker.component.css']
})
export class L23DatePickerComponent implements OnInit {
  minDate = new Date();
  maxDate: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    this.minDate.setDate(new Date().getDate() - 7);
    this.maxDate.setDate(new Date().getDate() + 7);
  }

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // saturday = 6 and sunday = 1
  }

}
