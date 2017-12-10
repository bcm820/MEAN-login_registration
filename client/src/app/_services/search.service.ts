
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SearchService {
  
  constructor(private _http: HttpClient) { }

  searchTerm(term, type){
    return term
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.search(term, type));
  }

  search(term, type) {
    if(term === ''){ return of([]) }
    return this._http.get(`/api/users/search/${type}/${term}`)
  }

}
