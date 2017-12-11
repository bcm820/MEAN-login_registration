import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { SearchComponent } from './components/search/search.component';
import { ShowComponent } from './components/show/show.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'users/list', component: UserlistComponent},
  {path:'users/search', component: SearchComponent},
  {path:'users/show/:id', component: ShowComponent},
  {path:'users/update/:id', component: UpdateComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
