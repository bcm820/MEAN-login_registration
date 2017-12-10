
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UsersService {
  
  constructor(private _http: HttpClient) { }

  list() {
    return this._http.get(`/api/users/list`);
  }

  show(id) {
    this._http.get(`/api/users/${id}`)
  }

  update(user) { // maybe add subscribe
    return this._http.post(`/api/users/${user.id}/update`, user);
  }

  delete(id) {
    return this._http.delete(`/api/users/${id}/delete`);
  }

}
