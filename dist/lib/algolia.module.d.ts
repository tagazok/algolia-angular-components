import { ModuleWithProviders } from '@angular/core';
import { ApiServiceConfig } from './algolia.service';
export declare class AlgoliaModule {
    constructor(parentModule: AlgoliaModule);
    static forRoot(config: ApiServiceConfig): ModuleWithProviders;
}
