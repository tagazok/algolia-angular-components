import { Injectable, EventEmitter } from '@angular/core';
import * as algoliasearch from 'algoliasearch';

// const ATTRIBUTES = null;

@Injectable()
export class AlgoliaService {

  client: any = null;
  index: any = null;
  content: any = {};
  parameters: any = {};
  facets: any = [];
  facetFilters: any = {};
  query: string = '';
  
  appId: string = "";
  apiKey: string = ""
  
  resultUpdated: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.client = algoliasearch(this.appId, this.apiKey);
    console.log("AlgoliaService constructor");
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
    } else {
      this.parameters.facets = this.facets;
    }
  }

  async search() {
    this.buildParameters();
    this.parameters.facetFilters = this.buildFacetFilters();
    this.content = await this.index.search(this.query, this.parameters);
    this.resultUpdated.emit();

    console.log(this.content);
  }
}
