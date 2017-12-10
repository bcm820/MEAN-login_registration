import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  
  constructor(private _http: HttpClient) { }
  
  join(user) {
    this._http.post('/api/auth/join', user).subscribe(
      res => console.log(res),
      err => console.log(err));
  }

  login(user) {
    this._http.post('/api/auth/login', user).subscribe(
      res => console.log(res),
      err => console.log(err));
  }

  listEmails(){
    return this._http.get('/api/auth/emails');
  }

}
