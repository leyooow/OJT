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
import { ProfileComponent } from './component/profile/profile.component';
import { PersonalInfoFormComponent } from './component/forms/personal-info-form/personal-info-form.component';
import { CivilServiceFormComponent } from './component/forms/civil-service-form/civil-service-form.component';
import { EducationalBackgroundFormComponent } from './component/forms/educational-background-form/educational-background-form.component';
import { TrainingFormComponent } from './component/forms/training-form/training-form.component';
import { WorkExperienceFormComponent } from './component/forms/work-experience-form/work-experience-form.component';


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
 {path: 'profile', 
 component: ProfileComponent,
 ...canActivate(redirectToLogin) },

 {path: 'personal-info-form', 
 component: PersonalInfoFormComponent,
 ...canActivate(redirectToLogin) },

 {path: 'educational-background-form', 
 component: EducationalBackgroundFormComponent,
 ...canActivate(redirectToLogin) },

 {path: 'civil-service-form', 
 component: CivilServiceFormComponent,
 ...canActivate(redirectToLogin) },

 {path: 'work-experience-form', 
 component: WorkExperienceFormComponent,
 ...canActivate(redirectToLogin) },

 {path: 'training-form', 
 component: TrainingFormComponent,
 ...canActivate(redirectToLogin) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
