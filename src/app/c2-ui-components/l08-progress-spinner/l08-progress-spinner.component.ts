import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-l08-progress-spinner',
  templateUrl: './l08-progress-spinner.component.html',
  styleUrls: ['./l08-progress-spinner.component.css']
})
export class L08ProgressSpinnerComponent implements OnInit {
  showSpinner = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}
