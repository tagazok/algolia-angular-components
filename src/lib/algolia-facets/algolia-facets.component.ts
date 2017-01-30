import { Component, OnInit, Input, ContentChild, TemplateRef, ElementRef, Renderer } from '@angular/core';
import { AlgoliaService } from '../algolia.service';

@Component({
  selector: 'app-algolia-facets',
  // templateUrl: './algolia-facets.component.html',
  // styleUrls: ['./algolia-facets.component.css']
  template: `
  <div>
    <p *ngIf="label">{{label}}</p>
    <ul *ngIf='as.content.facets !== undefined' class="facets">
      <li *ngFor="let facet of as.content.facets[attribute] | mapToIterable">
        <div (click)="updateSearch(facet)" [ngClass]="isFacetActive(facet.key) ? selectedcssclass : ''">
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
  }`]
})
export class AlgoliaFacetsComponent implements OnInit {
  @Input() attribute: string;
  @Input() label: string;
  @Input() limit: number;
  @Input() selectedcssclass: string;
  
  @ContentChild(TemplateRef) itemTemplate:TemplateRef<any>;

  constructor(private as: AlgoliaService, elementRef: ElementRef, renderer: Renderer) {
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
  };

  updateSearch(facet) {
    if (this.as.facetFilters[facet.key] === undefined) {
      this.as.addFacetFilter(this.attribute, facet);
    } else {
      this.as.removeFacetFilter(this.attribute, facet);
    }
  }
}
