import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UsersService } from '../_services/users.service';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user;
  emails;

  constructor(
    private _us: UsersService,
    private _as: AuthService,
    private _router: Router
  ){}
  
  ngOnInit(){
    this.user = new User();
    this.emails = this._as.listEmails();
  }

  validateEmail(){
    for(let address of this.emails){
      if(this.user.email === address){
        return true;
      }
      else { return false; }
    }
  }
  
  onSubmit(form){
    this._as.join(this.user);
    this.user = new User();
    this._router.navigate(['']); // change to auto login
  }

}
