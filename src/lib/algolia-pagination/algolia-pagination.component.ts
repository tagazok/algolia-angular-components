import { Component, OnInit, Input } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-pagination',
  // templateUrl: './algolia-pagination.component.html',
  // styleUrls: ['./algolia-pagination.component.scss']
  template: `
  <ul class="pagination">
    <li *ngFor="let i of range" [ngClass]="{'active' : (i) === as.content.page+1}" (click)="changePage(i-1)">
      <div>{{i}}</div>
    </li>
  </ul>
  `,
  styles: [`
  .pagination {
    list-style-type: none;
    }
    .pagination li {
      list-style-type: none;
      display: inline-block;
      border-radius: 2px;
      text-align: center;
      vertical-align: top;
      height: 30px;
      width: 30px;
      cursor: pointer;
    }
    .pagination li div {
      width: 100%;
      height: 100%;

      height: 100%;
      box-sizing: border-box;
      max-height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .pagination li.active {
      background-color: #20cf7d;
    }
  `]
})
export class AlgoliaPaginationComponent implements OnInit {
  @Input() padding: number = 3;

  range: Array<number> = [];
  nbDisplayPages: number;

  constructor(private as: AlgoliaService) { 
    this.buildRange();
  }

  buildRange() {
    this.buildNbDisplayedPages();
    let paddingLeft = this.buildPaddingLeft();
    let paddingRight = this.nbDisplayPages - paddingLeft;
    let start = this.as.content.page - paddingLeft + 1;
    let end = this.as.content.page + paddingRight + 1;
    this.range = Array.from({length: (end - start)}, (v, k) => k + start);
  }

  buildNbDisplayedPages() {
    this.nbDisplayPages = Math.min(2 * this.padding + 1, this.as.content.nbPages);
  }

  buildPaddingLeft() {
    if (this.as.content.page <= this.padding) {
      return this.as.content.page;
    }

    if (this.as.content.page >= this.as.content.nbPages - this.padding) {
      return this.nbDisplayPages - (this.as.content.nbPages - this.as.content.page);
    }

    return this.padding;
  }

  ngOnInit() {
    this.as.resultUpdated.subscribe(
      () => this.buildRange()
    );
  }

  changePage(page) {
    this.as.parameters.page = page;
    this.as.search();
  }
}
