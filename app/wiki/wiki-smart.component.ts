import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  template: `
    <h1>Smarter Wikipedia Demo</h1>
    <p><i>Fetches when typing stops</i></p>

    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
  providers: [WikipediaService]
})
export class WikiSmartComponent {

  constructor (private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) {
    this.searchTermStream.next(term);
    debugger
  }

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(3000)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
}
