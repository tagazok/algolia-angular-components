import { Directive, ElementRef } from '@angular/core';
import { AlgoliaService } from './algolia.service';

@Directive({
  selector: '[appAlgoliaApp]',
  providers: [AlgoliaService]
})
export class AlgoliaAppDirective {

  constructor(as: AlgoliaService) { 
    // as.setIndex('contacts');
    // as.search('a');
  }

  // onSearchResult(str: String) {
  //   console.log(`In Directive ${str}`);
  // }
}
