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
export let AlgoliaStarsComponent = class AlgoliaStarsComponent {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.listArray = [];
    }
    ngOnInit() {
        this.listArray = [...Array(this.max + 1).keys()].splice(this.min, this.max + 1);
        ;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], AlgoliaStarsComponent.prototype, "max", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], AlgoliaStarsComponent.prototype, "min", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], AlgoliaStarsComponent.prototype, "value", void 0);
AlgoliaStarsComponent = __decorate([
    Component({
        selector: 'app-algolia-stars',
        template: `
  <span *ngFor="let i of listArray;">
    {{ i <= value ? '★' : '☆' }}
  </span>
  `
    }), 
    __metadata('design:paramtypes', [])
], AlgoliaStarsComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-stars/algolia-stars.component.js.map