import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'firebase/auth';
import { concatMap, switchMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { UsersService } from 'src/app/services/users.service';
@UntilDestroy()

@Component({
  selector: 'app-educational-background-form',
  templateUrl: './educational-background-form.component.html',
  styleUrls: ['./educational-background-form.component.css']
})
export class EducationalBackgroundFormComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$

  ProfileFrom = new FormGroup({
    uid: new FormControl('', ),

    nameOfSchoolElem: new FormControl('', ),
    basicEducElem: new FormControl('', ),
    fromElem: new FormControl('', ),
    toElem: new FormControl('', ),
    highestLevelElem: new FormControl('', ),
    yearGraduatedElem: new FormControl('',),
    scholarElem: new FormControl('', ),

    // nameOfSchoolSecondary: new FormControl('', ),
    // basicEducSecondary: new FormControl('', ),
    // fromSecondary: new FormControl('', ),
    // toSecondary: new FormControl('', ),
    // highestLevelSecondary: new FormControl('', ),
    // yearGraduatedSecondary: new FormControl('', ),
    // scholarSecondary: new FormControl('', ),

    nameOfSchoolCollege: new FormControl('', ),
    basicEducCollege: new FormControl('', ),
    fromCollege: new FormControl('', ),
    toCollege: new FormControl('', ),
    highestLevelCollege: new FormControl('', ),
    yearGraduatedCollege: new FormControl('', ),
    scholarCollege: new FormControl('', ),

    nameOfSchoolVocational: new FormControl('', ),
    basicEducVocational: new FormControl('', ),
    fromVocational: new FormControl('', ),
    toVocational: new FormControl('', ),
    highestLevelVocational: new FormControl('', ),
    yearGraduatedVocational: new FormControl('', ),
    scholarVocational: new FormControl('', ),

    nameOfSchoolStudies: new FormControl('', ),
    basicEducStudies: new FormControl('', ),
    fromStudies: new FormControl('', ),
    toStudies: new FormControl('', ),
    highestLevelStudies: new FormControl('', ),
    yearGraduatedStudies: new FormControl('', ),
    scholarStudies: new FormControl('', ),

    nameOfSchoolJunior: new FormControl('', ),
    basicEducJunior: new FormControl('', ),
    fromJunior: new FormControl('', ),
    toJunior: new FormControl('', ),
    highestLevelJunior: new FormControl('', ),
    yearGraduatedJunior: new FormControl('', ),
    scholarJunior: new FormControl('', ),

    nameOfSchoolSenior: new FormControl('', ),
    basicEducSenior: new FormControl('', ),
    fromSenior: new FormControl('', ),
    toSenior: new FormControl('', ),
    highestLevelSenior: new FormControl('', ),
    yearGraduatedSenior: new FormControl('', ),
    scholarSenior: new FormControl('', ),

    // addressElem: new FormControl('', ),
    // addressJunior: new FormControl('', ),
    // addressSenior: new FormControl('', ),
    // addressCollege: new FormControl('', ),
    // addressVocational: new FormControl('', ),
    // addressStudies: new FormControl('', ),
  })

  constructor(authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,) { }

  ngOnInit(): void {

    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user) => {
      this.ProfileFrom.patchValue({ ...user })
    })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'Failed to upload an image.',

      }), concatMap((photoURL) => this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe()
  }

  saveProfile() {

    if (!this.ProfileFrom.valid){
      alert('Please fill all required(*) fields!')
    }else{
      const {employeeId,  firstname, lastname, email, password } = this.ProfileFrom.value

      const profileData = this.ProfileFrom.value
      this.usersService.updateUser(profileData).pipe(
  
       
  
        this.toast.observe({
          success: 'Data saved.',
          loading: 'Saving data... ',
          error: 'There was an error in saving the data.'
        })
      ).subscribe()
        
      
        this.router.navigate(['/civil-service-form'])
    }
    


    // const {employeeId,  firstname, lastname, email, password } = this.ProfileFrom.value

    // const profileData = this.ProfileFrom.value
    // this.usersService.updateUser(profileData).pipe(

     

    //   this.toast.observe({
    //     success: 'Data saved.',
    //     loading: 'Saving data... ',
    //     error: 'Failed to update data.'
    //   })
    // ).subscribe()
      


    
    
   }

}
