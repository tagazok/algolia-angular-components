import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algolia-sort',
  template: `
  <div>
  <select>
    <option *ngFor="let indice of indices" [value]="indice.value">
      {{indice.label}}
    </option>
  </select>
  </div>
  `
})
export class AlgoliaSortComponent implements OnInit {
  @Input() indices = [];
  @Input() label = '';

  constructor() { }

  ngOnInit() {
  }

}
