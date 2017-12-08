import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user = new User();

  onInit(){
  }
  
  onSubmit(form){

    // after each submission, reset user object
    this.user = new User();
    form.reset();

  }

}
