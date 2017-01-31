import { OnInit, TemplateRef, ElementRef, Renderer } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export declare class AlgoliaFacetsComponent implements OnInit {
    private as;
    attribute: string;
    label: string;
    limit: number;
    selectedcssclass: string;
    itemTemplate: TemplateRef<any>;
    constructor(as: AlgoliaService, elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    isFacetActive(value: any): boolean;
    updateSearch(facet: any): void;
}
