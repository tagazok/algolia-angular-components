## Algolia components library for Angular

Library of components for Algolia on angular.

  <h2 align="center">WARNING: THIS IS A WIP</h2>

So :
* Components may change, appear from nowhere or disapear in a black hole (it happens)
* Documentation may not be accurate and no up to date

### Installation
```sh
npm install -save @tagazok/algolia-angular-components
```

### Usage
Import the AlgoliaModule and the AlgoliaService in your app
```javascript
import { AlgoliaModule, AlgoliaService } from '@tagazok/algolia-angular-components'
```  
  
Load the module into your app passing

```javascript
@NgModule({
  ...,
  imports: [
    AlgoliaModule.forRoot({appId: 'YOUR_APP_ID', apiKey: 'YOUR_APP_KEY'}),
  ],
  ...
})
export class AppModule { }
```
You are now ready to use the components in your app \o/

### List of components

#### Search
Displays a search bar that triggers a live search
```html
<app-algolia-search [index]="'ikea'" [hitsPerPage]="16"></app-algolia-search>
```
Parameters :
* index : The algolia index
* hitsPerPage : The maximum number of results you want the research to return (default is 12)


#### Results
Displays the results of your research in a custom template
```html
<app-algolia-results>
  <template let-item="item">
    <!-- The html template of a single result item -->
  </template>
</app-algolia-result>
```

### Facets
Displays facet and manage filters on click.
```html
<app-algolia-facets [attribute]="'materials'"[label]="'Material'" [limit]="'10'" [selectedcssclass]="'selected-filter'">
  <template let-item="item">
     <!-- The html of a single result item -->
    <!-- ex : {{item.key}} <span class="facet-val">({{item.val}})</span> -->
    <!-- ex : <div class="facet-color" [attr.data-facet-value]="item.key">&nbsp;</div> -->
  </template>
</app-algolia-facets>
```
Parameters :
* attribute : The attribute of which you want the facet
* label : The label of the List (may be removed in future release... not sure yet)
* limit : The maximum number of results per facets
* selectedcssclass : The class to apply when a facet value is selected for filtering the query


#### Stats
Simply displays the stats of the result of the research
```html
<app-algolia-stats [cssclass]="'my-stats'"></app-algolia-stats>
```
Parameters :
* cssclass : The css class you want to use for this component (will be removed in future release)

#### Sort (early WIP)
Allows you to specify how you want your result to be sorted.
```html
<app-algolia-sort [indices]="sortIndices" [label]="'Sort by'"></app-algolia-sort>
```
Parameters :
* label : The placeholder/title of the search field (will be removed in future release as md- has been removed)
* indices : List of items to sort with. Exemple :
```javascript
const sortIndices = [
      {value: 'ikea', label: 'Featured'},
      {value: 'ikea_price_asc', label: 'Price asc.'},
      {value: 'ikea_price_desc', label: 'Price desc.'}
    ];
```

#### Pagination
Add pagination to navigate in your results
```html
<app-algolia-pagination [padding]="2"></app-algolia-pagination>
```
Parameters :
* padding : See +/- n page numbers (default is 3 if not specified)

TODO :
* See what we can do with css customisation 
* Better algolia-result customisation (row / card / column views)
* manage OR request for filters.
* In algolia-stats. Add attribute to choose which stat to display (# and time)
* Add prev / new arrow on pagination

## Example
This app has been built with the components of this library with the idea of <a href="https://community.algolia.com/instantsearch.js/examples/e-commerce/">Algolia e-commerce demo app</a>  
*To be published very soon on github :)*
<p align="center">
  <img src="http://oleplus.free.fr/screenshots/algolia-computer-full.png" alt="Screenshot" />
  View on Chrome (see <a href="http://oleplus.free.fr/screenshots/algolia-ipad.png" title="Ipad" target="_blank">Ipad</a> and <a href="http://oleplus.free.fr/screenshots/algolia-android.png" title="Nexus 5X" target="_blank">Nexus 5X</a> screenshots)
</p>


## Thanks
Created using https://github.com/manekinekko/angular-library-starter
