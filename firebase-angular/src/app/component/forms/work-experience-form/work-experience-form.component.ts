import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Database, onValue, ref, update } from '@angular/fire/database';
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
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.css']
})
export class WorkExperienceFormComponent implements OnInit {

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

    fromWorkExp2: new FormControl('', ),
    tomWorkExp2: new FormControl('', ),
    positionTitleWorkExp2: new FormControl('', ),
    departmentWorkExp2: new FormControl('', ),
    monthlySalaryWorkExp2: new FormControl('', ),
    salaryJobPayWorkExp2: new FormControl('', ),
    statusOfAppointmentWorkExp2: new FormControl('', ),
    governmentServiceWorkExp2: new FormControl('', ),
    
    fromWorkExp3: new FormControl('', ),
    tomWorkExp3: new FormControl('', ),
    positionTitleWorkExp3: new FormControl('', ),
    departmentWorkExp3: new FormControl('', ),
    monthlySalaryWorkExp3: new FormControl('', ),
    salaryJobPayWorkExp3: new FormControl('', ),
    statusOfAppointmentWorkExp3: new FormControl('', ),
    governmentServiceWorkExp3: new FormControl('', ),

    
    
  })

  constructor(authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,
    public database: Database,) { }

  ngOnInit(): void {

    // this.showForm()

    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user) => {
      this.ProfileForm.patchValue({ ...user })
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

    if (!this.ProfileForm.valid){
      alert('Please fill all required(*) fields!')
    }else{

  

      const { 
        fromWorkExp2,
        fromWorkExp3,


      } = this.ProfileForm.value


      const userId = getAuth().currentUser?.uid.toString();
      const ref1 = ref(this.database, 'users/' + userId)

      update(ref1, {
        fromWorkExp2: fromWorkExp2,
        fromWorkExp3: fromWorkExp3,

      })


    const profileData = this.ProfileForm.value
    this.usersService.updateUser(profileData).pipe(

     

      this.toast.observe({
        success: 'Data saved.',
        loading: 'Saving data... ',
        error: 'Failed to update data.'
      })
    ).subscribe()
      
    
      this.router.navigate(['/training-form'])

    }
    

    
    
   }

   addWork1() {
    document.getElementById('addWork1')!.style.display = "none"
    document.getElementById('divWork2')!.style.display = "block"
    document.getElementById('addWork2')!.style.display = "block"
    document.getElementById('cancelWork1')!.style.display = "block"
  }

  addWork2() {
    document.getElementById('addWork2')!.style.display = "none"
    document.getElementById('cancelWork1')!.style.display = "none"
    document.getElementById('divWork3')!.style.display = "block"
  }

  cancelWork1() {
    document.getElementById('addWork2')!.style.display = "none"
    document.getElementById('cancelWork1')!.style.display = "none"
    document.getElementById('divWork2')!.style.display = "none"
    document.getElementById('addWork1')!.style.display = "block"
  }

  cancelWork2() {
    document.getElementById('divWork3')!.style.display = "none"
    document.getElementById('addWork2')!.style.display = "block"
    document.getElementById('cancelWork1')!.style.display = "block"
  }

  showForm() {
   
    const userId = getAuth().currentUser?.uid.toString();

    const starCountRef = ref(this.database, 'users/' + userId + '/fromWorkExp2');
    onValue(starCountRef, (snapshot) => {
      const data1 = snapshot.val();

      if (data1 != "" || data1 != null) {
        document.getElementById('addWork1')!.style.display = "none"
        document.getElementById('divWork2')!.style.display = "block"
        document.getElementById('cancelWork1')!.style.display = "none"


      }

    })
  }

}
