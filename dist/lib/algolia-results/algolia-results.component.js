var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export let AlgoliaResultsComponent = class AlgoliaResultsComponent {
    constructor(as) {
        this.as = as;
    }
    ngOnInit() {
    }
};
__decorate([
    ContentChild(TemplateRef), 
    __metadata('design:type', TemplateRef)
], AlgoliaResultsComponent.prototype, "itemTemplate", void 0);
AlgoliaResultsComponent = __decorate([
    Component({
        selector: 'app-algolia-results',
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
    }), 
    __metadata('design:paramtypes', [AlgoliaService])
], AlgoliaResultsComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-results/algolia-results.component.js.map