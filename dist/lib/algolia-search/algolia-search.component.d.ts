import { OnInit } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export declare class AlgoliaSearchComponent implements OnInit {
    private as;
    index: string;
    hitsPerPage: number;
    constructor(as: AlgoliaService);
    ngOnInit(): void;
    onKey(str: string): void;
}
