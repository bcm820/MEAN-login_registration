import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  
  constructor(private _http: HttpClient) { }
  
  join(user) {
    return this._http.post('/api/auth/join', user)
  }

  login(user) {
    return this._http.post('/api/auth/login', user)
  }

  checkEmail(email){
    return email
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(email => this.check(email));
  }
  
  check(email){
    if(email === ''){ return of(0) }
    return this._http.get(`/api/auth/check/${email}`)
  }

}
