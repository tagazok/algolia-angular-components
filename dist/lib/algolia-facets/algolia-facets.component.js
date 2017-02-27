var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild, TemplateRef, ElementRef, Renderer } from '@angular/core';
import { AlgoliaService } from '../algolia.service';
export let AlgoliaFacetsComponent = class AlgoliaFacetsComponent {
    constructor(as, elementRef, renderer) {
        this.as = as;
        // renderer.listen(elementRef.nativeElement, 'click', (event) => {
        //   debugger;
        // });
    }
    ngOnInit() {
        this.as.addFacet(this.attribute);
        if (this.limit) {
            this.as.parameters.maxValuesPerFacet = this.limit;
        }
    }
    isFacetActive(value) {
        return (this.as.facetFilters[this.attribute] && this.as.facetFilters[this.attribute].includes(value)) ? true : false;
    }
    ;
    updateSearch(facet) {
        if ((this.as.facetFilters[this.attribute] === undefined) || !this.as.facetFilters[this.attribute].includes(facet.key)) {
            this.as.addFacetFilter(this.attribute, facet);
        }
        else {
            this.as.removeFacetFilter(this.attribute, facet);
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], AlgoliaFacetsComponent.prototype, "attribute", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], AlgoliaFacetsComponent.prototype, "label", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], AlgoliaFacetsComponent.prototype, "limit", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], AlgoliaFacetsComponent.prototype, "selectedcssclass", void 0);
__decorate([
    ContentChild(TemplateRef), 
    __metadata('design:type', TemplateRef)
], AlgoliaFacetsComponent.prototype, "itemTemplate", void 0);
AlgoliaFacetsComponent = __decorate([
    Component({
        selector: 'app-algolia-facets',
        template: `
  <div>
    <p *ngIf="label"><b>{{label}}</b></p>
    <ul *ngIf='as.content.facets !== undefined' class="facets">
      <li *ngFor="let facet of as.content.facets[attribute] | mapToIterable">
        <div (click)="updateSearch(facet)" [ngClass]="isFacetActive(facet.key) ? selectedcssclass : ''" class="facet-item">
          <template [ngTemplateOutlet]="itemTemplate" [ngOutletContext]="{item: facet}"></template>
        </div>
      </li>
    </ul>
  </div>
  `,
        styles: [`
  :host {
    display: block;
    clear: both;
  }
  .facets {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1.42857143;
  }
  .facet-item {
    cursor: pointer;
  }
  `]
    }), 
    __metadata('design:paramtypes', [AlgoliaService, ElementRef, Renderer])
], AlgoliaFacetsComponent);
//# sourceMappingURL=/Users/olivier/lab/algolia/algolia-components/lib/algolia-facets/algolia-facets.component.js.map