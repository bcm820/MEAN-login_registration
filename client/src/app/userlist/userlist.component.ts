import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users;
  
  constructor(private _us: UsersService) { }

  ngOnInit() {
    this._us.list()
      .subscribe(users => this.users = users);
  }

}
