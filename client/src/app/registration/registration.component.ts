import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
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
    this.getEmails();
  }
  
  onSubmit(form){
    this._as.join(this.user);
    this.user = new User();
    this._router.navigate(['users']);
  }

  getEmails(){
    this._as.listEmails().subscribe(emails => this.emails = emails);
  }

}
