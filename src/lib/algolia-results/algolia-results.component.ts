import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-results',
  // templateUrl: './algolia-results.component.html',
  // styleUrls: ['./algolia-results.component.scss']
  template: `
  <div class="flex-row flex-space-around flex-center flex-wrap">
    <div class="my-item flex-column col-width" *ngFor="let result of as.content.hits; let i = index">
      <template [ngTemplateOutlet]="itemTemplate" [ngOutletContext]="{item: result, index: i}"></template>
    </div>
  </div>
  `,
  styles: [`
  .my-item {
    padding: .5%;
    width: 100%;
  }

    
  @media (min-width: 1280px) {
    .col-width { max-width: 25%; }
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    .col-width { max-width: 33%; }
  }
  @media (min-width: 600px) and (max-width: 959px) {
    .col-width { max-width: 50%; }
  }

  .flex-row {
    flex-flow: row wrap;
    background-color: rgb(228, 228, 228);
    box-sizing: border-box;
    max-height: 100%;
    display: flex;
  }

  .flex-column {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-space-around {
    justify-content: space-around;
  }

  .flex-center {
    align-items: center;
    align-content: center;
  }
`]
})
export class AlgoliaResultsComponent implements OnInit {
  
  @ContentChild(TemplateRef) itemTemplate:TemplateRef<any>;

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
    
  }
}
