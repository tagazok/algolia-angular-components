import { OnInit, TemplateRef } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export declare class AlgoliaResultsComponent implements OnInit {
    private as;
    itemTemplate: TemplateRef<any>;
    constructor(as: AlgoliaService);
    ngOnInit(): void;
}
