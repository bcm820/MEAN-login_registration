import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsersService {
  
  users: any = new BehaviorSubject([]);
  user = new BehaviorSubject({});
  
  constructor(private _http: HttpClient) { }

  findAll() {
    this._http.get(`/api/users`).subscribe(
      users => this.users.next(users));
  }

  findById(id) {
    this._http.get(`/api/users/${id}`).subscribe(
      user => this.user.next(user));
  }

  update(user) { // maybe add subscribe
    return this._http.post(`/api/users/${user.id}/update`, user);
  }

  delete(id) {
    return this._http.delete(`/api/users/${id}/delete`);
  }

}
