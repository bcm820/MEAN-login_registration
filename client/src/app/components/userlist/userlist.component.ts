import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users;
  
  constructor(
    private _us: UsersService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._us.list()
      .subscribe(users => this.users = users);
  }

  show(id){
    this._router.navigate(['users','show', id]);
  }

  update(id){
    this._router.navigate(['users','update', id]);
  }

  delete(id){
    this._us.delete(id)
      .subscribe(res => console.log(res));
  }

}
