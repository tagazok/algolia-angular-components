import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { AlgoliaService } from './algolia.service';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, 
    // FlexLayoutModule.forRoot()
    ],
  exports: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent],
  declarations: [AlgoliaAppDirective, AlgoliaSearchComponent, AlgoliaResultsComponent, AlgoliaFacetsComponent, MapToIterablePipe, AlgoliaSortComponent, AlgoliaPaginationComponent, AlgoliaStatsComponent]
})
export class AlgoliaModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlgoliaModule,
      providers: [
        AlgoliaService
      ]
    };
  }
}
