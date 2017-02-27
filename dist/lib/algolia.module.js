var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgoliaSearchComponent } from './algolia-search/algolia-search.component';
import { AlgoliaResultsComponent } from './algolia-results/algolia-results.component';
import { AlgoliaFacetsComponent } from './algolia-facets/algolia-facets.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { AlgoliaSortComponent } from './algolia-sort/algolia-sort.component';
import { AlgoliaPaginationComponent } from './algolia-pagination/algolia-pagination.component';
import { AlgoliaStatsComponent } from './algolia-stats/algolia-stats.component';
import { AlgoliaService, ApiServiceConfig } from './algolia.service';
let AlgoliaModule_1 = class AlgoliaModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: AlgoliaModule_1,
            providers: [
                { provide: ApiServiceConfig, useValue: config }
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
        exports: [AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
        declarations: [AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, MapToIterablePipe, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
        providers: [AlgoliaService]
    }),
    __param(0, Optional()),
    __param(0, SkipSelf()), 
    __metadata('design:paramtypes', [AlgoliaModule])
], AlgoliaModule);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia.module.js.map