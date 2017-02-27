import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-search',
  template: `
    <div>
      <input type="text" #searchbox (keyup)="onKey(searchbox.value)" placeholder="{{placeHolder}}">
    </div>
  `,
  styles: [`
    input { 
      width: 100%;
      padding: 10px;
      font-size: 1.2em;
      box-sizing: border-box;
    }`]
})
export class AlgoliaSearchComponent implements OnInit {
  @Input() index: string;
  @Input() hitsPerPage: number = 12;
  @Input() placeHolder: string = "Search";

  constructor(private as: AlgoliaService) { 
  }

  ngOnInit() {
    this.as.setIndex(this.index);
    this.as.parameters.hitsPerPage = this.hitsPerPage;
    this.as.search();
  }

  onKey(str: string) {
    this.as.query = str;
    this.as.search();
  }
}
