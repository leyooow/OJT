import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LandingComponent } from './component/landing/landing.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import { FacultyDashboardComponent } from './component/faculty-dashboard/faculty-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CivilServiceFormComponent } from './component/forms/civil-service-form/civil-service-form.component';
import { EducationalBackgroundFormComponent } from './component/forms/educational-background-form/educational-background-form.component';
import { PersonalInfoFormComponent } from './component/forms/personal-info-form/personal-info-form.component';
import { TrainingFormComponent } from './component/forms/training-form/training-form.component';
import { WorkExperienceFormComponent } from './component/forms/work-experience-form/work-experience-form.component';
import { MatNativeDateModule, } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    FacultyDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    PersonalInfoFormComponent,
    EducationalBackgroundFormComponent,
    CivilServiceFormComponent,
    WorkExperienceFormComponent,
    TrainingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
