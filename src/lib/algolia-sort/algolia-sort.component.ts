import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algolia-sort',
  // templateUrl: './algolia-sort.component.html',
  // styleUrls: ['./algolia-sort.component.css']
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
