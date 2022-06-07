import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Database, onValue, ref, set, update } from '@angular/fire/database';
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
    uid: new FormControl('',),
    toTraining: new FormControl('',),
    fromTraining: new FormControl('',),
    numberOfHrsTraining: new FormControl('',),
    typeOfLdTraining: new FormControl('',),
    conductedTraining: new FormControl('',),
    done: new FormControl('',),
    TitleOfLearningTraining: new FormControl('',),

    toTraining2: new FormControl('',),
    fromTraining2: new FormControl('',),
    numberOfHrsTraining2: new FormControl('',),
    typeOfLdTraining2: new FormControl('',),
    conductedTraining2: new FormControl('',),
    TitleOfLearningTraining2: new FormControl('',),

    toTraining3: new FormControl('',),
    fromTraining3: new FormControl('',),
    numberOfHrsTraining3: new FormControl('',),
    typeOfLdTraining3: new FormControl('',),
    conductedTraining3: new FormControl('',),
    TitleOfLearningTraining3: new FormControl('',),

    toTraining4: new FormControl('',),
    fromTraining4: new FormControl('',),
    numberOfHrsTraining4: new FormControl('',),
    typeOfLdTraining4: new FormControl('',),
    conductedTraining4: new FormControl('',),
    TitleOfLearningTraining4: new FormControl('',),


    toTraining5: new FormControl('',),
    fromTraining5: new FormControl('',),
    numberOfHrsTraining5: new FormControl('',),
    typeOfLdTraining5: new FormControl('',),
    conductedTraining5: new FormControl('',),
    TitleOfLearningTraining5: new FormControl('',),











  })

  constructor(authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,
    public database: Database,) {


  }

  ngOnInit(): void {

    
    // this.showForm()


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
        error: 'Failed to upload an image.',

      }), concatMap((photoCertURL) => this.usersService.updateUser({ uid: user.uid, photoCertURL }))
    ).subscribe()
  }


  uploadImage2(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/certificate2/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'Failed to upload an image.',

      }), concatMap((photoCertURL3) => this.usersService.updateUser({ uid: user.uid, photoCertURL3 }))
    ).subscribe()
  }

  uploadImage3(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/certificate3/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'Failed to upload an image.',

      }), concatMap((photoCertURL4) => this.usersService.updateUser({ uid: user.uid, photoCertURL4 }))
    ).subscribe()
  }

  uploadImage4(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/certificate4/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'Failed to upload an image.',

      }), concatMap((photoCertURL5) => this.usersService.updateUser({ uid: user.uid, photoCertURL5 }))
    ).subscribe()
  }

  uploadImage5(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/certificate5/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Uploading...',
        error: 'Failed to upload an image.',

      }), concatMap((photoCertURL6) => this.usersService.updateUser({ uid: user.uid, photoCertURL6 }))
    ).subscribe()
  }




  saveProfile(user: ProfileUser) {

 

  



   
    if (!this.ProfileForm.valid) {
      alert('Please fill all required(*) fields!')
    } else {

      const { uid, toTraining2, toTraining3, toTraining4, toTraining5, } = this.ProfileForm.value

      const userId = getAuth().currentUser?.uid.toString();
      const ref2 = ref(this.database, 'users/' + userId)

      update(ref2, {
        uid: uid,
        done: '1',
        toTraining2: toTraining2,
        toTraining3: toTraining3,
        toTraining4: toTraining4,
        toTraining5: toTraining5,
  
      })
  

      const profileData = this.ProfileForm.value
      this.usersService.updateUser(profileData).pipe(

        this.toast.observe({
          success: 'Data saved.',
          loading: 'Saving data... ',
          error: 'There was an error in saving the data.'
        }), concatMap((done) => this.usersService.updateUser({ uid: user.uid, done: '1' }))
      ).subscribe()




      this.router.navigate(['/personal-info-display'])
    }





    // const profileData = this.ProfileForm.value
    // this.usersService.updateUser(profileData).pipe(

    //   this.toast.observe({
    //     success: 'Data saved.',
    //     loading: 'Saving data... ',
    //     error: 'Failed to update data.'
    //   }), concatMap((done) => this.usersService.updateUser({ uid: user.uid, done: '1' }))
    // ).subscribe()





  }

  add1() {
    document.getElementById('addBtn1')!.style.display = "none"
    document.getElementById('div1')!.style.display = "block"
  }

  add2() {

    document.getElementById('addBtn2')!.style.display = "none"
    document.getElementById('div2')!.style.display = "block"
    document.getElementById('cancelBtn1')!.style.display = "none"
  }

  add3() {

    document.getElementById('addBtn3')!.style.display = "none"
    document.getElementById('div3')!.style.display = "block"
    document.getElementById('cancelBtn2')!.style.display = "none"
  }

  add4() {

    document.getElementById('addBtn4')!.style.display = "none"
    document.getElementById('div4')!.style.display = "block"
    document.getElementById('cancelBtn3')!.style.display = "none"
  }




  cancel1() {
    document.getElementById('addBtn1')!.style.display = "block"
    document.getElementById('div1')!.style.display = "none"
  }

  cancel2() {
    document.getElementById('addBtn2')!.style.display = "block"
    document.getElementById('div2')!.style.display = "none"
    document.getElementById('cancelBtn1')!.style.display = "block"
  }

  cancel3() {
    document.getElementById('addBtn3')!.style.display = "block"
    document.getElementById('div3')!.style.display = "none"
    document.getElementById('cancelBtn2')!.style.display = "block"
  }

  cancel4() {
    document.getElementById('addBtn4')!.style.display = "block"
    document.getElementById('div4')!.style.display = "none"
    document.getElementById('cancelBtn3')!.style.display = "block"

  }

  showForm() {

    const userId = getAuth().currentUser?.uid.toString();

    const starCountRef = ref(this.database, 'users/' + userId + '/toTraining2');
    onValue(starCountRef, (snapshot) => {
      const data2 = snapshot.val();
      

      if (data2 != "" || data2 != null) {
        document.getElementById('addBtn1')!.style.display = "none"
        document.getElementById('div1')!.style.display = "block"
      }

    })



  }



}