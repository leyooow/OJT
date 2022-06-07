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
  selector: 'app-educational-background-form',
  templateUrl: './educational-background-form.component.html',
  styleUrls: ['./educational-background-form.component.css']
})
export class EducationalBackgroundFormComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$

  ProfileFrom = new FormGroup({
    uid: new FormControl('',),

    nameOfSchoolElem: new FormControl('',),
    basicEducElem: new FormControl('',),
    fromElem: new FormControl('',),
    toElem: new FormControl('',),
    highestLevelElem: new FormControl('',),
    yearGraduatedElem: new FormControl('',),
    scholarElem: new FormControl('',),

    // nameOfSchoolSecondary: new FormControl('', ),
    // basicEducSecondary: new FormControl('', ),
    // fromSecondary: new FormControl('', ),
    // toSecondary: new FormControl('', ),
    // highestLevelSecondary: new FormControl('', ),
    // yearGraduatedSecondary: new FormControl('', ),
    // scholarSecondary: new FormControl('', ),

    nameOfSchoolCollege: new FormControl('',),
    basicEducCollege: new FormControl('',),
    fromCollege: new FormControl('',),
    toCollege: new FormControl('',),
    highestLevelCollege: new FormControl('',),
    yearGraduatedCollege: new FormControl('',),
    scholarCollege: new FormControl('',),

    nameOfSchoolVocational: new FormControl('',),
    basicEducVocational: new FormControl('',),
    fromVocational: new FormControl('',),
    toVocational: new FormControl('',),
    highestLevelVocational: new FormControl('',),
    yearGraduatedVocational: new FormControl('',),
    scholarVocational: new FormControl('',),

    nameOfSchoolStudies: new FormControl('',),
    basicEducStudies: new FormControl('',),
    fromStudies: new FormControl('',),
    toStudies: new FormControl('',),
    highestLevelStudies: new FormControl('',),
    yearGraduatedStudies: new FormControl('',),
    scholarStudies: new FormControl('',),

    nameOfSchoolJunior: new FormControl('',),
    basicEducJunior: new FormControl('',),
    fromJunior: new FormControl('',),
    toJunior: new FormControl('',),
    highestLevelJunior: new FormControl('',),
    yearGraduatedJunior: new FormControl('',),
    scholarJunior: new FormControl('',),

    nameOfSchoolSenior: new FormControl('',),
    basicEducSenior: new FormControl('',),
    fromSenior: new FormControl('',),
    toSenior: new FormControl('',),
    highestLevelSenior: new FormControl('',),
    yearGraduatedSenior: new FormControl('',),
    scholarSenior: new FormControl('',),

    nameOfSchoolCollege2: new FormControl('',),
    basicEducCollege2: new FormControl('',),
    fromCollege2: new FormControl('',),
    toCollege2: new FormControl('',),
    highestLevelCollege2: new FormControl('',),
    yearGraduatedCollege2: new FormControl('',),
    scholarCollege2: new FormControl('',),


    nameOfSchoolCollege3: new FormControl('',),
    basicEducCollege3: new FormControl('',),
    fromCollege3: new FormControl('',),
    toCollege3: new FormControl('',),
    highestLevelCollege3: new FormControl('',),
    yearGraduatedCollege3: new FormControl('',),
    scholarCollege3: new FormControl('',),

    nameOfSchoolVocational2: new FormControl('',),
    basicEducVocational2: new FormControl('',),
    fromVocational2: new FormControl('',),
    toVocational2: new FormControl('',),
    highestLevelVocational2: new FormControl('',),
    yearGraduatedVocational2: new FormControl('',),
    scholarVocational2: new FormControl('',),

    nameOfSchoolVocational3: new FormControl('',),
    basicEducVocational3: new FormControl('',),
    fromVocational3: new FormControl('',),
    toVocational3: new FormControl('',),
    highestLevelVocational3: new FormControl('',),
    yearGraduatedVocational3: new FormControl('',),
    scholarVocational3: new FormControl('',),


    nameOfSchoolStudies2: new FormControl('',),
    basicEducStudies2: new FormControl('',),
    fromStudies2: new FormControl('',),
    toStudies2: new FormControl('',),
    highestLevelStudies2: new FormControl('',),
    yearGraduatedStudies2: new FormControl('',),
    scholarStudies2: new FormControl('',),

    nameOfSchoolStudies3: new FormControl('',),
    basicEducStudies3: new FormControl('',),
    fromStudies3: new FormControl('',),
    toStudies3: new FormControl('',),
    highestLevelStudies3: new FormControl('',),
    yearGraduatedStudies3: new FormControl('',),
    scholarStudies3: new FormControl('',),




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


    if (!this.ProfileFrom.valid) {
      alert('Please fill all required(*) fields!')
    } else {

      const { 
        nameOfSchoolCollege2, 
        nameOfSchoolCollege3,
        nameOfSchoolVocational2,
        nameOfSchoolVocational3,
        nameOfSchoolStudies2,
        nameOfSchoolStudies3,


      } = this.ProfileFrom.value


      const userId = getAuth().currentUser?.uid.toString();
      const ref1 = ref(this.database, 'users/' + userId)

      update(ref1, {
        nameOfSchoolCollege2: nameOfSchoolCollege2,
        nameOfSchoolCollege3: nameOfSchoolCollege3,
        nameOfSchoolVocational2: nameOfSchoolVocational2,
        nameOfSchoolVocational3: nameOfSchoolVocational3,
        nameOfSchoolStudies2: nameOfSchoolStudies2,
        nameOfSchoolStudies3: nameOfSchoolStudies3


      })


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







  }

  // College

  addColllege1() {
    document.getElementById('addCollege1')!.style.display = "none"
    document.getElementById('divCollege2')!.style.display = "block"
    document.getElementById('addCollege2')!.style.display = "block"
    document.getElementById('cancelCollege1')!.style.display = "block"
  }

  addColllege2() {
    document.getElementById('addCollege2')!.style.display = "none"
    document.getElementById('cancelCollege1')!.style.display = "none"
    document.getElementById('divCollege3')!.style.display = "block"
  }

  cancelCollege1() {
    document.getElementById('addCollege2')!.style.display = "none"
    document.getElementById('cancelCollege1')!.style.display = "none"
    document.getElementById('divCollege2')!.style.display = "none"
    document.getElementById('addCollege1')!.style.display = "block"
  }

  cancelCollege2() {
    document.getElementById('divCollege3')!.style.display = "none"
    document.getElementById('addCollege2')!.style.display = "block"
    document.getElementById('cancelCollege1')!.style.display = "block"
  }

  // Vocational

  addVoc1() {
    document.getElementById('addVoc1')!.style.display = "none"
    document.getElementById('divVoc2')!.style.display = "block"
    document.getElementById('addVoc2')!.style.display = "block"
    document.getElementById('cancelVoc1')!.style.display = "block"
  }

  addVoc2() {
    document.getElementById('addVoc2')!.style.display = "none"
    document.getElementById('cancelVoc1')!.style.display = "none"
    document.getElementById('divVoc3')!.style.display = "block"
  }

  cancelVoc1() {
    document.getElementById('addVoc2')!.style.display = "none"
    document.getElementById('cancelVoc1')!.style.display = "none"
    document.getElementById('divVoc2')!.style.display = "none"
    document.getElementById('addVoc1')!.style.display = "block"
  }

  cancelVoc2() {
    document.getElementById('divVoc3')!.style.display = "none"
    document.getElementById('addVoc2')!.style.display = "block"
    document.getElementById('cancelVoc1')!.style.display = "block"
  }

   // Vocational

   addStud1() {
    document.getElementById('addStud1')!.style.display = "none"
    document.getElementById('divStud2')!.style.display = "block"
    document.getElementById('addStud2')!.style.display = "block"
    document.getElementById('cancelStud1')!.style.display = "block"
  }

  addStud2() {
    document.getElementById('addStud2')!.style.display = "none"
    document.getElementById('cancelStud1')!.style.display = "none"
    document.getElementById('divStud3')!.style.display = "block"
  }

  cancelStud1() {
    document.getElementById('addStud2')!.style.display = "none"
    document.getElementById('cancelStud1')!.style.display = "none"
    document.getElementById('divStud2')!.style.display = "none"
    document.getElementById('addStud1')!.style.display = "block"
  }

  cancelStud2() {
    document.getElementById('divStud3')!.style.display = "none"
    document.getElementById('addStud2')!.style.display = "block"
    document.getElementById('cancelStud1')!.style.display = "block"
  }



  showForm() {

    const userId = getAuth().currentUser?.uid.toString();

    const starCountRef = ref(this.database, 'users/' + userId + '/nameOfSchoolCollege2');
    onValue(starCountRef, (snapshot) => {
      const data1 = snapshot.val();

      if (data1 != "" || data1 != null) {
        document.getElementById('addCollege1')!.style.display = "none"
        document.getElementById('divCollege2')!.style.display = "block"
        document.getElementById('cancelCollege1')!.style.display = "none"


      }

    })


    const starCountRef2 = ref(this.database, 'users/' + userId + '/nameOfSchoolVocational2');
    onValue(starCountRef2, (snapshot) => {
      const data1 = snapshot.val();

      if (data1 != "" || data1 != null){
        document.getElementById('addVoc1')!.style.display = "none"
        document.getElementById('divVoc2')!.style.display = "block"
        document.getElementById('cancelVoc1')!.style.display = "none"

      }

    })

    const starCountRef3 = ref(this.database, 'users/' + userId + '/nameOfSchoolStudies2');
    onValue(starCountRef3, (snapshot) => {
      const data1 = snapshot.val();

      if (data1 != "" || data1 != null ) {
        document.getElementById('addStud1')!.style.display = "none"
        document.getElementById('divStud2')!.style.display = "block"
        document.getElementById('cancelStud1')!.style.display = "none"

      }

    })



  
  }

}
