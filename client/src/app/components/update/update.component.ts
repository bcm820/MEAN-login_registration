import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

import { Subject } from 'Rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user: any = {email:'',first:'',last:'',bday:''}
  unique;
  email$ = new Subject();
  flashes;
  
  constructor(
    private _us: UsersService,
    private _as: AuthService,
    private _rt: ActivatedRoute,
    private _router: Router
  ) {
    this._as.checkEmail(this.email$)
      .subscribe(result => {
      if(result === 1){ this.unique = false; }
      else { this.unique = true; }
    });
  }

  ngOnInit() {
    this._rt.paramMap.subscribe(param => {
      let id = param.get('id');
      this._us.show(id).subscribe(user => this.user = user);
    });
    this.unique = true;
    this.flashes = false;
  }

  update(){
    let updates = {
      _id: this.user._id,
      email: this.user.email,
      first: this.user.first,
      last: this.user.last,
      bday: this.user.bday_short,
    }
    this._us.update(updates)
    .subscribe(
    res => {
      if(Array.isArray(res)){
        this.flashes = res;
      } else {
        this.flashes = false;
        this._router.navigate(['users','show',this.user._id]);
      }
    });
  }

  back(){
    this._router.navigate(['users','list']);
  }

}
