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
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$

  ProfileForm = new FormGroup({
    uid: new FormControl('', ),
    fromWorkExp: new FormControl('', ),
    tomWorkExp: new FormControl('', ),
    positionTitleWorkExp: new FormControl('', ),
    departmentWorkExp: new FormControl('', ),
    monthlySalaryWorkExp: new FormControl('', ),
    salaryJobPayWorkExp: new FormControl('', ),
    statusOfAppointmentWorkExp: new FormControl('', ),
    governmentServiceWorkExp: new FormControl('', ),


    
    
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
      this.ProfileForm.patchValue({ ...user })
    })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/certificate/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'There was an error in uploading',

      }), concatMap((photoCertURL) => this.usersService.updateUser({ uid: user.uid, photoCertURL }))
    ).subscribe()
  }

  saveProfile() {

    if (!this.ProfileForm.valid) return
    

    const {employeeId,  firstname, lastname, email, password } = this.ProfileForm.value

    const profileData = this.ProfileForm.value
    this.usersService.updateUser(profileData).pipe(

     

      this.toast.observe({
        success: 'Data saved.',
        loading: 'Saving data... ',
        error: 'There was an error in saving the data.'
      })
    ).subscribe()
      
    
      this.router.navigate(['/faculty-dashboard'])
    
   }

}