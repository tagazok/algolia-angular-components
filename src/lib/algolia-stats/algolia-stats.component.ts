import { Component, OnInit, Input } from '@angular/core';
import { AlgoliaService } from '../algolia.service'

@Component({
  selector: 'app-algolia-stats',
  // templateUrl: './stats.component.html',
  // styleUrls: ['./stats.component.css']
  template: `
  <div [ngClass]="cssclass">
    {{as.content.nbHits |number}} results found in {{as.content.processingTimeMS}}ms
  </div>
  `
})
export class AlgoliaStatsComponent implements OnInit {
  @Input() cssclass: string;

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
  }
}
