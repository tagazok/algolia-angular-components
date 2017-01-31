var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { Injectable, EventEmitter } from '@angular/core';
import * as algoliasearch from 'algoliasearch';
// const ATTRIBUTES = null;
export let AlgoliaService = class AlgoliaService {
    constructor() {
        this.client = null;
        this.index = null;
        this.content = {};
        this.parameters = {};
        this.facets = [];
        this.facetFilters = {};
        this.query = '';
        this.resultUpdated = new EventEmitter();
    }
    connect(appId, apiKey) {
        this.client = algoliasearch(appId, apiKey);
    }
    setIndex(name) {
        this.index = this.client.initIndex(name);
    }
    addFacet(attribute) {
        this.facets.push(attribute);
    }
    removeFacet(attribute) {
        let index = this.facets.indexOf(attribute);
        if (index !== -1) {
            this.facets.splice(index, 1);
        }
    }
    addFacetFilter(facet, value) {
        if (this.facetFilters[facet] === undefined)
            this.facetFilters[facet] = [];
        this.facetFilters[facet].push(value.key);
        this.search();
    }
    removeFacetFilter(facet, value) {
        this.facetFilters[facet].splice(this.facetFilters[facet].indexOf(value), 1);
        this.search();
    }
    buildFacetFilters() {
        let result = [];
        for (let key in this.facetFilters) {
            for (let val of this.facetFilters[key]) {
                result.push(`${key}:${val}`);
            }
        }
        // hum...
        // Object.entries(this.facetFilters).forEach(([key, value]) => {
        // });
        return result;
    }
    buildParameters() {
        if (Object.keys(this.facets).length === 0 && this.facets.constructor === Object) {
            delete this.parameters.facets;
        }
        else {
            this.parameters.facets = this.facets;
        }
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            this.buildParameters();
            this.parameters.facetFilters = this.buildFacetFilters();
            this.content = yield this.index.search(this.query, this.parameters);
            this.resultUpdated.emit();
            console.log(this.content);
        });
    }
};
AlgoliaService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], AlgoliaService);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia.service.js.map