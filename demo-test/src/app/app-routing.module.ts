import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [

  {path: 'user', component: UsersComponent},
  {path: 'customers', component: CustomerComponent}
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { 
 
}
