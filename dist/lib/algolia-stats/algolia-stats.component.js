var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export let AlgoliaStatsComponent = class AlgoliaStatsComponent {
    constructor(as) {
        this.as = as;
    }
    ngOnInit() {
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], AlgoliaStatsComponent.prototype, "cssclass", void 0);
AlgoliaStatsComponent = __decorate([
    Component({
        selector: 'app-algolia-stats',
        template: `
  <span>
    {{as.content.nbHits |number}} results found in {{as.content.processingTimeMS}}ms
  </span>
  `
    }), 
    __metadata('design:paramtypes', [AlgoliaService])
], AlgoliaStatsComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-stats/algolia-stats.component.js.map