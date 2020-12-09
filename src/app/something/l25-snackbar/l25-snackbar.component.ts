import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {L25CustomSnackbarComponent} from './l25-custom-snackbar/l25-custom-snackbar.component';

@Component({
  selector: 'app-l25-snackbar',
  templateUrl: './l25-snackbar.component.html',
  styleUrls: ['./l25-snackbar.component.css']
})
export class L25SnackbarComponent implements OnInit {

  constructor(
    private snakeBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  openSnackBar(message, action): void {
    const snackBarRef = this.snakeBar.open(message, action, {duration: 2000});

    snackBarRef.afterOpened().subscribe(() => {
      console.log('The snackbar was shown');
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action (undo) was triggered');
    });
  }

  openCustomSnackBar(): void {
    this.snakeBar.openFromComponent(L25CustomSnackbarComponent, {duration: 2000});
  }
}
