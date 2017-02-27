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
export let AlgoliaSearchComponent = class AlgoliaSearchComponent {
    constructor(as) {
        this.as = as;
        this.hitsPerPage = 12;
    }
    ngOnInit() {
        this.as.setIndex(this.index);
        this.as.parameters.hitsPerPage = this.hitsPerPage;
        this.as.search();
    }
    onKey(str) {
        this.as.query = str;
        this.as.search();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], AlgoliaSearchComponent.prototype, "index", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], AlgoliaSearchComponent.prototype, "hitsPerPage", void 0);
AlgoliaSearchComponent = __decorate([
    Component({
        selector: 'app-algolia-search',
        // templateUrl: './algolia-search.component.html',
        // styleUrls: ['./algolia-search.component.css']
        template: `
    <div>
      <input type="text" #searchbox (keyup)="onKey(searchbox.value)" placeholder="Search a product">
    </div>
  `,
        styles: ['input { width: 100%; padding: 10px; font-size: 1.2em; box-sizing: border-box; }']
    }), 
    __metadata('design:paramtypes', [AlgoliaService])
], AlgoliaSearchComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-search/algolia-search.component.js.map