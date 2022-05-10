import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, doc, Firestore, getDoc, getDocs, getFirestore, } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initializeApp } from '@firebase/app';
import { getMetadata } from '@firebase/storage';


import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as bootstrap from 'bootstrap';
import { User } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { concatMap, switchMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { UsersService } from 'src/app/services/users.service';
@UntilDestroy()
@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {

  public data: any = []
  facultyList: ProfileUser[] = []

  uid: string = ""
  employeeId: string = ""
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""

  done: string = ""



  public done1: any


  user$ = this.usersService.currentUserProfile$

  ProfileForm = new FormGroup({
    uid: new FormControl('',),
    employeeId: new FormControl('',),
    email: new FormControl('',),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('',),
    nameExtension: new FormControl(''),
    dateOfBirth: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    placeOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('',),
    civilStatus: new FormControl('',),
    height: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    bloodType: new FormControl('',),
    gsis: new FormControl('',),
    pagibig: new FormControl('',),
    philhealth: new FormControl('',),
    sss: new FormControl('',),
    tin: new FormControl('',),
    citezenship: new FormControl('', Validators.required),
    houseBlockResident: new FormControl(''),
    streetResident: new FormControl(''),
    subdivisionResident: new FormControl(''),
    barangayResident: new FormControl('', Validators.required),
    municipalityResident: new FormControl('', Validators.required),
    provinceResident: new FormControl('', Validators.required),
    zipCodeResident: new FormControl('', Validators.required),
    houseBlockPermanent: new FormControl(''),
    streetPermanent: new FormControl(''),
    subdivisionPermanent: new FormControl(''),
    barangayPermanent: new FormControl('', Validators.required),
    municipalityPermanent: new FormControl('', Validators.required),
    provincePermanent: new FormControl('', Validators.required),
    zipCodePermanent: new FormControl('', Validators.required),
    telephoneNo: new FormControl('',),
    mobileNo: new FormControl('', Validators.required),
    alternateEmail: new FormControl('',),
    done: new FormControl('',),

  })
  testModal: bootstrap.Modal | undefined;

  constructor(private authService: AuthenticationService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,
    private firestore: Firestore,
    private afs: AngularFirestore,



  ) {

    this.getdata()


  }

  async ngOnInit(): Promise<void> {

    // const firebaseConfig = {
    //   apiKey: "AIzaSyAZwTfopp-Qz3HFzGNBc5iYsBpA6U1A4FI",
    //   authDomain: "ojt1-6eeca.firebaseapp.com",
    //   projectId: "ojt1-6eeca",
    //   storageBucket: "ojt1-6eeca.appspot.com",
    //   messagingSenderId: "586333622765",
    //   appId: "1:586333622765:web:ff90f5bef683338019d7e4",
    //   measurementId: "G-0L3NSLG8QZ"
    // };

    // const app = initializeApp(firebaseConfig)
    // const db = getFirestore(app)
    // const userID = getAuth().currentUser?.uid

    // this.usersService.getDoneData(userID).subscribe(ref => {
    //   if (!ref.exists){
    //     console.log('no data')
    //   }else{
    //   console.log(ref.data())
    //   }
    // })





    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user) => {
      this.ProfileForm.patchValue({ ...user })
      
    })

    


  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Data saved.',
        loading: 'Saving data... ',
        error: 'There was an error in saving the data.'

      }), concatMap((photoURL) => this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe()
  }

  saveProfile() {

    if (!this.ProfileForm.valid) return


    // const {employeeId, dateOfBirth,  firstname, lastname, email, password } = this.ProfileForm.value



    // alert(dateOfBirth.toString())

    const profileData = this.ProfileForm.value

    this.usersService.updateUser(profileData).pipe(

      // switchMap(({ user: { uid } }) => this.usersService.updateUser(
      //   { uid,  dateOfBirth: bday  })
      // ),


      this.toast.observe({
        success: 'Data saved.',
        loading: 'Updating data... ',
        error: 'There was an error in updating the data.'
      })
    ).subscribe()
    const { done } = this.ProfileForm.value

    


      this.router.navigate(['/educational-background-form'])

    




  }
  getdata() {
    // const userID = getAuth().currentUser?.uid
    //  const dbInstance = collection(this.firestore, 'users/')
    //  getDocs(dbInstance)
    //  .then((response) => {
    //    console.log(response.docs.map((user) =>  {
    //      return{ ...user.data(), id: user.id}


    //    }))
    //  })

    this.afs.collection('users').valueChanges()
      .subscribe(val => console.log(val))



  }

  getDone() {
    //   const userID = getAuth().currentUser?.uid

    //   this.usersService.getDoneData(userID).subscribe(
    //     (data) => this.done = data.exists ? data.data().done : undefined)

    const userID = getAuth().currentUser?.uid
    this.usersService.getDoneData(userID)

  }

  continue() {
    const profileData = this.ProfileForm.value

    this.usersService.updateUser(profileData)
      .subscribe()
    const { done } = this.ProfileForm.value

    if (done == '') {
      this.router.navigate(['/faculty-dashboard'])
    } else {


      this.router.navigate(['/educational-background-form'])

    }
  }

  openModal() {
    this.testModal = new bootstrap.Modal(document.getElementById('welcomeModal')!, {
      keyboard: false
    })
    console.log(getAuth().currentUser?.uid)
    this.testModal.show()

  }



  // getAllRequest() {
  //   const userID = getAuth().currentUser?.uid
  //   this.usersService.getDoneData(userID).subscribe(res => {

  //   })
  // }
  //  getDocdata(user: ProfileUser, done: any)   {
  //   const ref = doc(this.firestore, 'users', user?.uid, done).toString()
  //  }

}





