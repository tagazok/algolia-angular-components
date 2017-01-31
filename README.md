## Algolia component library

Library of components for Algolia on angular.

  <h2 align="center">WARNING: THIS IS A WIP</h2>

So :
* Component may change
* Documentation may not be accurate and up to date

### List of components

#### Search
Display a searchbar that triggers a search on each key stroke
```html
<app-algolia-search [index]="'ikea'" [hitsPerPage]="16"></app-algolia-search>
```
Parameters :
* index : The algolia index
* hitsPerPage : The number of results you want the search to return


#### Results
Display the results of your research in a custom template
```html
<app-algolia-results>
  <template let-item="item">
    <!-- The html of a single result item -->
  </template>
</app-algolia-result>
```

#### Stats
Simply display stats of the result of the research
```html
<app-algolia-stats [cssclass]="'my-stats'"></app-algolia-stats>
```
Parameters :
* cssclass : The css class you want to use for this component (will be removed in future release)

#### Sort
Allow you to specify how you want your result to be sorted.
```html
<app-algolia-sort [indices]="sortIndices" [label]="'Sort by'"></app-algolia-sort>
```
Parameters :
* label : The placeholder/title of the search field (will be removed in future release as md has been removed)
* indices : List of items to sort with. Exemple :
```javascript
const sortIndices = [
      {value: 'ikea', label: 'Featured'},
      {value: 'ikea_price_asc', label: 'Price asc.'},
      {value: 'ikea_price_desc', label: 'Price desc.'}
    ];
```

### facets
For each facet you add, the search will ask facets
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
* attribute : The attribute you want the facet
* label : The label of the List (may be removed... not sure yet)
* limit : The maximum number of result per facets
* selectedcssclass : The class to apply when a facet value is selected for filtering the query


## Exemple
<p align="center">
  <img src="http://oleplus.free.fr/screenshots/algolia-angular-components.png" alt="Screenshot" />
</p>

## Thanks
Created using https://github.com/manekinekko/angular-library-starter
