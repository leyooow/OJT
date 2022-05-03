import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.authService.currentUser$

  profileForm = new FormGroup({
    uid : new FormControl(''),
    displayName : new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    employeeId : new FormControl(''),
    
  })

  constructor(private authService : AuthenticationService,
     private imageUploadService: ImageUploadService,
     private toast: HotToastService ) { }

  ngOnInit(): void {
  }

  uploadImage(event: any, user: User){
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'There was an error in uploading',

      }), concatMap((photoURL) => this.authService.updateProfile({photoURL}))
    ).subscribe()
  }

  saveProfile(){}

}
