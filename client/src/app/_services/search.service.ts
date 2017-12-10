
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SearchService {
  
  constructor(private _http: HttpClient) { }

  timeSearch(params){
    return params
      .debounceTime(1000)
      .switchMap(params => this.search(params.field, params.term));
  }

  search(field, term) {
    if(field === '' || term === ''){ return of([]) }
    return this._http.get(`/api/users/search/${field}/${term}`)
  }

}
