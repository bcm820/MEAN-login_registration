
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
    return this._http.get(`/api/users/show/${id}`)
  }

  update(user) {
    return this._http.post(`/api/users/update/${user._id}`, user);
  }

  delete(id) {
    return this._http.delete(`/api/users/delete/${id}`);
  }

}
