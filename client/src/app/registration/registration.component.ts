import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { Subject } from 'Rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

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
  
  onSubmit(form){
    this._as.join(this.user)
      .subscribe(
      res => {
        if(Array.isArray(res)){
          this.flashes = res;
        } else {
          console.log(`${this.user.first} joined`);
          this.flashes = false;
          this._router.navigate(['']);
          this.user = new User();
        }
      });
  }

}
