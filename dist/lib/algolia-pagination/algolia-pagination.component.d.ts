import { OnInit } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export declare class AlgoliaPaginationComponent implements OnInit {
    private as;
    padding: number;
    range: Array<number>;
    nbDisplayPages: number;
    constructor(as: AlgoliaService);
    buildRange(): void;
    buildNbDisplayedPages(): void;
    buildPaddingLeft(): any;
    ngOnInit(): void;
    changePage(page: any): void;
}
