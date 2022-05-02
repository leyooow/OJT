import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyDashboardComponent } from './component/faculty-dashboard/faculty-dashboard.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [

  {path: '', redirectTo: 'landing' ,pathMatch : 'full'},
  {path: 'landing', component: LandingComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'faculty-dashboard', component: FacultyDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
