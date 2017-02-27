import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppService } from './app.service';
// import { AppPipe } from './app.pipe';
// import { AppComponent } from './component/app.component';

import { AlgoliaAppDirective } from './algolia-app.directive';
import { AlgoliaSearchComponent } from './algolia-search/algolia-search.component';
import { AlgoliaResultsComponent } from './algolia-results/algolia-results.component';
import { AlgoliaFacetsComponent } from './algolia-facets/algolia-facets.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { AlgoliaSortComponent } from './algolia-sort/algolia-sort.component';
import { AlgoliaPaginationComponent } from './algolia-pagination/algolia-pagination.component';
import { AlgoliaStatsComponent } from './algolia-stats/algolia-stats.component';
import { AlgoliaService, ApiServiceConfig } from './algolia.service';

@NgModule({
  imports: [
    CommonModule, 
    ],
  exports: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
  declarations: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, MapToIterablePipe, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
  providers: [AlgoliaService]
})
export class AlgoliaModule {
  constructor (@Optional() @SkipSelf() parentModule: AlgoliaModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: ApiServiceConfig): ModuleWithProviders {
    return {
      ngModule: AlgoliaModule,
      providers: [
        {provide: ApiServiceConfig, useValue: config }
      ]
    };
  }
}
