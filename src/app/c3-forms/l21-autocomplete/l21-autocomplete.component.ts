import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-l21-autocomplete',
  templateUrl: './l21-autocomplete.component.html',
  styleUrls: ['./l21-autocomplete.component.css']
})
export class L21AutocompleteComponent implements OnInit {
  options: string[] = ['Angular', 'React', 'Vue', 'Apple', 'Grapes', 'Banana', 'Blueberry', 'Book', 'Airplane'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'Apples'},
    {name: 'Bananas'}
  ];
  myFormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  filteredOptionsStartsWith: Observable<string[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredOptionsStartsWith = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStartsWith(value))
    );

  }

  displayFn(subject): string {
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue));
  }

  private _filterStartsWith(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().startsWith(filterValue));
  }

}
