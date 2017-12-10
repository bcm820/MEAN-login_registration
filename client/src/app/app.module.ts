import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';

import { UsersService } from './_services/users.service';
import { AuthService } from './_services/auth.service';
import { SearchService } from './_services/search.service';

import { DateValidator } from './registration/dateValidator';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserlistComponent,
    SearchComponent,
    LoginComponent,
    DateValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    AuthService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
