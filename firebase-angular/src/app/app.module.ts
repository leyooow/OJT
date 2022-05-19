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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



  


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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PersonalInfoDisplayComponent } from './component/display/personal-info-display/personal-info-display.component';
import { EducationalBackgroundDisplayComponent } from './component/display/educational-background-display/educational-background-display.component';
import { WorkExperienceDisplayComponent } from './component/display/work-experience-display/work-experience-display.component';
import { CivilServiceDisplayComponent } from './component/display/civil-service-display/civil-service-display.component';
import { TrainingDisplayComponent } from './component/display/training-display/training-display.component';
import { AngularFireModule } from '@angular/fire/compat';
import {  provideDatabase,getDatabase } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';

import { FacultyRequestComponent } from './component/display/faculty-request/faculty-request.component';
import { FacultyListComponent } from './component/display/faculty-list/faculty-list.component';
// import { NgxPrintModule } from 'ngx-print';
import { ConsentComponent } from './component/display/consent/consent.component';
import { NgxPrintModule } from 'ngx-print';
import { FacultyGenerateReportComponent } from './component/display/faculty-generate-report/faculty-generate-report.component';
import { AdminGenerateReportComponent } from './component/display/admin-generate-report/admin-generate-report.component';





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
    TrainingFormComponent,
    PersonalInfoDisplayComponent,
    EducationalBackgroundDisplayComponent,
    WorkExperienceDisplayComponent,
    CivilServiceDisplayComponent,
    TrainingDisplayComponent,
    FacultyRequestComponent,
    FacultyListComponent,
    ConsentComponent,
    FacultyGenerateReportComponent,
    AdminGenerateReportComponent,
    
    
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
    provideDatabase(() => getDatabase()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDividerModule,
    AngularFirestoreModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    // NgxPrintModule,
    

    
  


    


  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
