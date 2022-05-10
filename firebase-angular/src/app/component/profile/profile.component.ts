import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Database, onValue, ref, set } from '@angular/fire/database';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { UsersService } from 'src/app/services/users.service';

@UntilDestroy()

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$

  profileForm = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl(''),

    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    employeeId: new FormControl(''),
    mobileNo: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),

  })

  constructor(private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,
    public database: Database,) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user) => {
      this.profileForm.patchValue({ ...user })
    })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'There was an error in uploading',

      }), concatMap((photoURL) => this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe()
  }

  saveProfile() {

    const profileData = this.profileForm.value
    this.usersService.updateUser(profileData).pipe(
      this.toast.observe({
        success: 'Data has been updated.',
        loading: 'Updating data... ',
        error: 'There was an error in updating the data.' 
      })
    ).subscribe()
    const userID = getAuth().currentUser?.uid
    if(userID == 'fM6Ko90ezgSzZJ04sbCdGMmbOYt1'){
      this.router.navigate(['/admin-dashboard'])
    }else{
      this.router.navigate(['/faculty-dashboard'])
    }

    // this.setRealtimeDbData()

  }
  

}
