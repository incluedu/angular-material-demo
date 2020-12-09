import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-l26-diloag-example',
  templateUrl: './l26-dialog-example.component.html',
  styleUrls: ['./l26-dialog-example.component.css']
})
export class L26DialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
