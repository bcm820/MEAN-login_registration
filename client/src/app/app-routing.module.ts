import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'register', pathMatch:'full', component:RegistrationComponent},
  {path:'users/list', component:UserlistComponent},
  {path:'users/search', component:SearchComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
