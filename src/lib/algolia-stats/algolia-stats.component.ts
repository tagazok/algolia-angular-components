import { Component, OnInit } from '@angular/core';
import { AlgoliaService } from '../algolia.service'

@Component({
  selector: 'app-algolia-stats',
  // templateUrl: './stats.component.html',
  // styleUrls: ['./stats.component.css']
  template: `
  <div fxLayoutAlign="end center">
    {{as.content.nbHits |number}} results found in {{as.content.processingTimeMS}}ms
  </div>
  `,
  styles: ['div { color: #777; font-size: .8em; padding: .5%; }']
})
export class AlgoliaStatsComponent implements OnInit {

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
  }

}
