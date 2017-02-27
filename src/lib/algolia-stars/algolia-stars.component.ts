import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algolia-stars',
  template: `
  <span *ngFor="let i of listArray;">
    {{ i <= value ? '★' : '☆' }}
  </span>
  `
})
export class AlgoliaStarsComponent implements OnInit {
  @Input() max: number = 0;
  @Input() min: number = 0;
  @Input() value: number;

  listArray: number[] = [];
  
  constructor() { }

  ngOnInit() {
    this.listArray = [...Array(this.max + 1).keys()].splice(this.min, this.max + 1); ;
  }
}
