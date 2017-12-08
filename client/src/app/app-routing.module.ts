import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:RegistrationComponent},
//   {path:'products', component:ListComponent},
//   {path:'products/new', component:CreateComponent},
//   {path:'products/edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
