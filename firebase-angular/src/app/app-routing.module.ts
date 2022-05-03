import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './component/faculty-dashboard/faculty-dashboard.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard'
import { user } from '@angular/fire/auth';

const redirectToLogin = () => redirectUnauthorizedTo(['/login'])


// const redirectToDashboard = () => {
  
//   redirectLoggedInTo(['/faculty-dashboard'])
// }


const routes: Routes = [

  {path: '', redirectTo: 'landing' ,pathMatch : 'full'},
  {path: 'landing', component: LandingComponent },
  {path: 'login', 
  component: LoginComponent,
  
 },
  {path: 'register', component: RegisterComponent },

  {path: 'faculty-dashboard', 
  component: FacultyDashboardComponent,
  ...canActivate(redirectToLogin) 
},
  {path: 'admin-dashboard', 
  component: AdminDashboardComponent,
  ...canActivate(redirectToLogin) 
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
