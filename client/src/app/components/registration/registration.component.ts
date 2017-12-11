import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'Rxjs';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  email$ = new Subject();
  user;
  unique;
  flashes;

  constructor(
    private _as: AuthService,
    private _router: Router
  ){
    this._as.checkEmail(this.email$)
      .subscribe(result => {
      if(result === 1){ this.unique = false; }
      else { this.unique = true; }
    });
  }
  
  ngOnInit(){
    this.user = new User();
    this.unique = true;
    this.flashes = false;
  }
  
  register(){
    this._as.join(this.user)
    .subscribe(
    res => {
      if(Array.isArray(res)){
        this.flashes = res;
      } else {
        this.flashes = false;
        this._router.navigate(['']);
        this.user = new User();
      }
    });
  }

}
