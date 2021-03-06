import { Component, OnInit, PipeTransform, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, get, onValue, ref, set } from '@angular/fire/database';
import { ProfileUser } from 'src/app/models/user-profile';
// import * as admin from 'firebase-admin';
// import * as serviceAccount from 'firebase-admin'



import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import * as bootstrap from 'bootstrap';
import { getAuth, user } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { first, switchMap } from 'rxjs';
import * as $ from 'jquery';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/compat';

interface User {
  employeeId: string;
  email: string;
  firstname: string;
  lastname: string;
}




@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {


  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('l', 'pt', 'a2');
    pdf.setFontSize(30);
    pdf.setFont("Arial", 'bold');
    pdf.setTextColor('#072F6E');
    pdf.text('FACULTY LIST', 220,80);
    pdf.html(this.el.nativeElement,{
      margin: [100,20,100,185],
      callback: (pdf)=>{
        pdf.save("Faculty List.pdf")
      }
    })

  }



  user$ = this.usersService.currentUserProfile$

  password: string = '';
  email: string = '';
  employeeId: string = '';
  firstName: string = '';
  lastName: string = '';

  empID: any

  signUpForm = new FormGroup({
    uid: new FormControl('',),
    firstName: new FormControl('',),
    lastName: new FormControl('',),
    employeeId: new FormControl('',),
    email: new FormControl('',),
    password: new FormControl('',),
    confirmPassword: new FormControl('',),
    done: new FormControl('',),
  })


  details() {


    this.getUserFromTable()
    console.log(this.userList)
    // setTimeout(() => {

    //   const userId = localStorage.getItem('id')
    //   const uidRef = ref(this.database, 'users2/' + userId + '/uid');
    //   onValue(uidRef, (snapshot) => {
    //     const uid = snapshot.val();
    //     console.log(uid)

    //     this.afs.collection('users').doc(uid).ref.get().then(function (doc) {
    //       console.log(doc.data())


    //     })

    //   })





    //   this.getStarted()

    // }, 50);
    this.router.navigate(['/admin-generate-report'])

  }








  facRequestForm = new FormGroup({
    employeeId: new FormControl('',),

  })

  // countries = COUNTRIES;
  public userList!: ProfileUser[]


  public id: string | undefined;

  constructor(
    public database: Database,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    private authService: AuthenticationService,
    private usersService: UsersService,
    private router: Router,
    private toast: HotToastService,


  ) { }



  openAlert() {
    // let value = event.target.innerHTML;
    // console.log("value", value);









    if (confirm("Are you sure you want to delete this request?") == true) {

      // this.getUserFromTable()
      // this.delete()



    }

    // alert(this.userList.toString())

  }


  getUserFromTable() {

    var value: string
    $(".hit").click(function () {
      value = $(this).closest('tr').children('td:first').text();
      console.log(value);
      localStorage.setItem('id', value)



    });






    // await this.db.object('request/' + id).remove()
    // if(confirm('Are you sure you want to delete this request?') == true){
    //   alert(id)
    //   localStorage.clear();
    // }




    // let value1 = document.querySelector('.td1')?.innerHTML;
    // console.log(value1)

    // this.getStarted()
  }



  async accept() {



    //  const email1 = ''
    //  const employeeId1 = ''
    //  const firstName1 = ''
    //  const lastName1 = ''



    // setTimeout(() => {







    // }, 50)






    this.getUserFromTable()


    setTimeout(() => {



      const id = localStorage.getItem('id');


      //email
      const emailRef = ref(this.database, 'request/' + id + '/email');
      onValue(emailRef, (snapshot) => {
        const email = snapshot.val();

        localStorage.setItem('email', String(email))

      })


      //password
      const passworRef = ref(this.database, 'request/' + id + '/password');
      onValue(passworRef, (snapshot) => {
        const password = snapshot.val();
        localStorage.setItem('password', password)
      })

      //employeeId
      const employeeIdRef = ref(this.database, 'request/' + id + '/employeeId');
      onValue(employeeIdRef, (snapshot) => {
        const employeeId = snapshot.val();
        localStorage.setItem('employeeId', employeeId)

      })

      //firstName
      const firstNameRef = ref(this.database, 'request/' + id + '/firstName');
      onValue(firstNameRef, (snapshot) => {
        const firstName = snapshot.val();
        localStorage.setItem('firstName', firstName)
      })

      //LastName
      const LastNameRef = ref(this.database, 'request/' + id + '/lastName');
      onValue(LastNameRef, (snapshot) => {
        const lastName = snapshot.val();
        localStorage.setItem('LastName', lastName)
      })




      const email1 = String(localStorage.getItem('email')!)
      const employeeId1 = String(localStorage.getItem('employeeId')!)
      const firstName1 = String(localStorage.getItem('firstName')!)
      const lastName1 = String(localStorage.getItem('LastName')!)
      const password1 = String(localStorage.getItem('password')!)


      //   initializeApp({
      //     // credential: applicationDefault(),

      //     databaseURL: "https://ojt1-6eeca-default-rtdb.firebaseio.com"
      // });
      //var admin = require("firebase-admin");

      // const serviceAccount = 'path/to/serviceAccountKey.json';


      // admin.initializeApp({
      //   credential: admin.credential.cert(serviceAccount),
      //   databaseURL: 'https://mysuperdatabase.firebaseio.com'
      // });







      this.authService.signUp(email1, password1)
        .pipe(



          switchMap(({ user: { uid } }) => this.usersService.addUser(
            {
              uid, firstName: firstName1,
              lastName: lastName1, employeeId: employeeId1,
              email: email1, displayName: firstName1 + ' ' + lastName1,
            })
          ),





          this.toast.observe({
            success: 'Accepted',
            loading: 'Checking...',
            error: ({ message }) => `${message}`
          })
        ).subscribe(() => {
          //  this.getUserFromTable()

          const userId = getAuth().currentUser?.uid

          const ref1 = ref(this.database, 'users/' + userId)
          const ref2 = ref(this.database, 'users2/' + employeeId1)



          set(ref1, {

            employeeId: employeeId1,
            email: email1,
            uid: userId,
            firstName: firstName1,
            lastName: lastName1,
            password: password1,

          })

          set(ref2, {

            employeeId: employeeId1,
            email: email1,
            uid: userId,


          })

          this.authService.logout().subscribe(() => {


            const id = String(localStorage.getItem('id'))
            //  alert(id)

            const ref = this.db.object('users/' + id).remove()

            this.getStarted()

            localStorage.clear();

          })


          // this.getUserFromTable();



          this.authService.login('admin@gmail.com', 'admin123').subscribe()







          //  const emp = this.empID = '1




        })

    }, 50)










  }



  getAllRequest() {

    return new Promise((resolve, reject) => {
      this.db.list('users/').valueChanges().subscribe(value => {
        resolve(value)
      })
    })


  }

  async getStarted() {

    var users!: ProfileUser[]
    await this.getAllRequest().then(value => {
      users = value as ProfileUser[]
    })
    this.userList = users

    // console.log(this.userList)
  }

  async ngOnInit(): Promise<void> {
    this.getStarted()
  }

  getValue(event: any) {
    let value = event.target.innerHTML;
    console.log("value", value);
  }





}
