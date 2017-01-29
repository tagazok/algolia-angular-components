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

  buildParameters() {
    if (Object.keys(this.facets).length === 0 && this.facets.constructor === Object) {
      delete this.parameters.facets;
    } else {
      this.parameters.facets = this.facets;
    }
  }

  async search() {
    this.buildParameters();
    this.content = await this.index.search(this.query, this.parameters);
    this.resultUpdated.emit();

    console.log(this.content);
  }
}
