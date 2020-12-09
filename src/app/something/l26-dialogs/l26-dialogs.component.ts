import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {L26DialogExampleComponent} from './l26-diloag-example/l26-dialog-example.component';

@Component({
  selector: 'app-l26-dialogs',
  templateUrl: './l26-dialogs.component.html',
  styleUrls: ['./l26-dialogs.component.css']
})
export class L26DialogsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(L26DialogExampleComponent, {data: {name: 'Lustenauer'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
