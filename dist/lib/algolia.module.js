var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgoliaAppDirective } from './algolia-app.directive';
import { AlgoliaSearchComponent } from './algolia-search/algolia-search.component';
import { AlgoliaResultsComponent } from './algolia-results/algolia-results.component';
import { AlgoliaFacetsComponent } from './algolia-facets/algolia-facets.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { AlgoliaSortComponent } from './algolia-sort/algolia-sort.component';
import { AlgoliaPaginationComponent } from './algolia-pagination/algolia-pagination.component';
import { AlgoliaStatsComponent } from './algolia-stats/algolia-stats.component';
import { AlgoliaService } from './algolia.service';
let AlgoliaModule_1 = class AlgoliaModule {
    static forRoot() {
        return {
            ngModule: AlgoliaModule_1,
            providers: [
                AlgoliaService
            ]
        };
    }
};
export let AlgoliaModule = AlgoliaModule_1;
AlgoliaModule = AlgoliaModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        exports: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
        declarations: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, MapToIterablePipe, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent]
    }), 
    __metadata('design:paramtypes', [])
], AlgoliaModule);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia.module.js.map