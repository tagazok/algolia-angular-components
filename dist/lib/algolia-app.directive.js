var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from '@angular/core';
import { AlgoliaService } from './algolia.service';
export let AlgoliaAppDirective = class AlgoliaAppDirective {
    constructor(as) {
        // as.setIndex('contacts');
        // as.search('a');
    }
};
AlgoliaAppDirective = __decorate([
    Directive({
        selector: '[appAlgoliaApp]',
        providers: [AlgoliaService]
    }), 
    __metadata('design:paramtypes', [AlgoliaService])
], AlgoliaAppDirective);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-app.directive.js.map