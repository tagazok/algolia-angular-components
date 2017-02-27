import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-results',
  template: `
    <template  *ngFor="let result of as.content.hits; let i = index" [ngTemplateOutlet]="itemTemplate" [ngOutletContext]="{item: result, index: i}"></template>
  `,
  styles: [`
  .my-item {
    padding: .5%;
    width: 100%;
  }
`]
})
export class AlgoliaResultsComponent implements OnInit {
  
  @ContentChild(TemplateRef) itemTemplate:TemplateRef<any>;

  constructor(private as: AlgoliaService) { }

  ngOnInit() {
    
  }
}
