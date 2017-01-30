import { Injectable, EventEmitter } from '@angular/core';
import * as algoliasearch from 'algoliasearch';

const APPLICATION_ID = 'latency';
const API_KEY = '6be0576ff61c053d5f9a3225e2a90f76';
const ATTRIBUTES = null;


@Injectable()
export class AlgoliaService {

  client: any = null;
  index: any = null;
  content: any = {};
  parameters: any = {};
  facets: any = [];
  facetFilters: any = {};
  query: string = '';
  
  resultUpdated: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.client = algoliasearch(APPLICATION_ID, API_KEY);
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
    debugger;
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
