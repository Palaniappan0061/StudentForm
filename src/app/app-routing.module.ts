import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './component/RoutingTask1/home-component/home-component.component';
import { AboutComponentComponent } from './component/RoutingTask1/about-component/about-component.component';
import { ContactUsComponent } from './component/RoutingTask1/contact-us/contact-us.component';
import { UsersComponentComponent } from './component/RoutingTask1/users-component/users-component.component';
import { UserComponentComponent } from './component/RoutingTask1/user-component/user-component.component';
import { NotFoundComponent } from './component/RoutingTask1/not-found/not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'Home',component:HomeComponentComponent},
  {path:'About',component:AboutComponentComponent},
  {path:'Contact',component:ContactUsComponent},
  {path:'Users',component:UsersComponentComponent},
  {path:'User/id',component:UserComponentComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
