import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';

import { DateValidator } from './validators/date.validator';
import { ShowComponent } from './components/show/show.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserlistComponent,
    SearchComponent,
    LoginComponent,
    DateValidator,
    ShowComponent,
    UpdateComponent
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
