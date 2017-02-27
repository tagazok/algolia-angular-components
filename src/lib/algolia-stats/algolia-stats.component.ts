import { Component, OnInit, Input } from '@angular/core';
import { AlgoliaService } from '../algolia.service'

@Component({
  selector: 'app-algolia-stats',
  template: `
  <span>
    {{as.content.nbHits |number}} results found in {{as.content.processingTimeMS}}ms
  </span>
  `
})
export class AlgoliaStatsComponent implements OnInit {
  @Input() cssclass: string;

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
  }
}
