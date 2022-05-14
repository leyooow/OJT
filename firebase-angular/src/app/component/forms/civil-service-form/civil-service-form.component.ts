import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
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
  selector: 'app-civil-service-form',
  templateUrl: './civil-service-form.component.html',
  styleUrls: ['./civil-service-form.component.css']
})
export class CivilServiceFormComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$

  profileForm = new FormGroup({
    uid: new FormControl(''),
    careercivil: new FormControl(''),
    ratingCivil: new FormControl(''),
    dateofExamCivil: new FormControl(''),
    placeofExamCivil: new FormControl(''),
    numberCivil: new FormControl(''),
    dateofValidityCivil: new FormControl(''),
    

  })

  constructor(private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router) { }

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
        error: 'Failed to upload an image.',

      }), concatMap((photoURL) => this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe()
  }

  saveProfile() {
    if (!this.profileForm.valid){
      alert('Please fill all required(*) fields!')
    }else{
      const profileData = this.profileForm.value
      this.usersService.updateUser(profileData).pipe(
        this.toast.observe({
          success: 'Data saved.',
          loading: 'Saving data... ',
          error: 'There was an error in saving the data.'
        })
      ).subscribe()
      this.router.navigate(['/work-experience-form'])
    }
    


    // const profileData = this.profileForm.value
    // this.usersService.updateUser(profileData).pipe(
    //   this.toast.observe({
    //     success: 'Data saved.',
    //     loading: 'Saving data... ',
    //     error: 'Failed to update data.'
    //   })
    // ).subscribe()
    // this.router.navigate(['/work-experience-form'])

    

    
   }

}

