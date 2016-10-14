import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    // http://en.wikipedia.org/w/api.php?search=te&action=opensearch&format=json&callback=JSONP_CALLBACK

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map((request) => request.json()[1]);

               // .toPromise()
               // .then((response) => response.json()[1]);
               // .then(function (response){
               //   // (response) => response.json()[1]
               //   // return response.json()[1]
               //   return response.json()[1]
               // });
                 // debugger
               //}
               // );
               // .map(
               //    response => <string[]> response.json()[1]
               //    // testLambda = () => {
               //    //     console.log( 'test:', this.scope ); //works
               //    //     this.scope;
               //    //     // breakpoint here fails to have proper this reference.
               //    // }
               // );
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
