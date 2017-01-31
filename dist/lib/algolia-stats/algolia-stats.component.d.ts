import { OnInit } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export declare class AlgoliaStatsComponent implements OnInit {
    private as;
    cssclass: string;
    constructor(as: AlgoliaService);
    ngOnInit(): void;
}
