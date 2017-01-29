import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-results',
  // templateUrl: './algolia-results.component.html',
  // styleUrls: ['./algolia-results.component.scss']
  template: `
  <div fxLayout="row" fxLayoutAlign="space-around center" style="flex-wrap: wrap; background-color: #e4e4e4;">
    <div fxFlex="25" class="my-item" *ngFor="let result of as.content.hits; let i = index" fxLayout="column">
      <template [ngTemplateOutlet]="itemTemplate" [ngOutletContext]="{item: result, index: i}"></template>
    </div>
  </div>
  `,
  styles: ['.my-item { padding: .5%; width: 100%; }']
})
export class AlgoliaResultsComponent implements OnInit {
  
  @ContentChild(TemplateRef) itemTemplate:TemplateRef<any>;

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
    
  }
}
