import { EventEmitter } from '@angular/core';
export declare class ApiServiceConfig {
    apiKey: string;
    appId: string;
}
export declare class AlgoliaService {
    client: any;
    index: any;
    content: any;
    parameters: any;
    facets: any;
    facetFilters: any;
    query: string;
    apiKey: string;
    appId: string;
    resultUpdated: EventEmitter<any>;
    constructor(config: ApiServiceConfig);
    connect(): void;
    setIndex(name: any): void;
    addFacet(attribute: any): void;
    removeFacet(attribute: any): void;
    addFacetFilter(facet: any, value: any): void;
    removeFacetFilter(facet: any, value: any): void;
    buildFacetFilters(): any[];
    buildParameters(): void;
    search(): Promise<void>;
}
