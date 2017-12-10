import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:RegistrationComponent},
  {path:'users', component:UserlistComponent},
  {path:'**', redirectTo:''}
//   {path:'products', component:ListComponent},
//   {path:'products/new', component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
