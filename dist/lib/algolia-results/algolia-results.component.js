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
    <template  *ngFor="let result of as.content.hits; let i = index" [ngTemplateOutlet]="itemTemplate" [ngOutletContext]="{item: result, index: i}"></template>
  `,
        styles: [`
  .my-item {
    padding: .5%;
    width: 100%;
  }
`]
    }), 
    __metadata('design:paramtypes', [AlgoliaService])
], AlgoliaResultsComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-results/algolia-results.component.js.map