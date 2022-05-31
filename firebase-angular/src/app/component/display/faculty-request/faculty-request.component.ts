import { Component, OnInit } from '@angular/core';
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
// import { applicationDefault } from 'firebase-admin/app';
import Swal from 'sweetalert2';



interface User {
  employeeId: string;
  email: string;
  firstname: string;
  lastname: string;
}
// let COUNTRIES: user[] = [
//   // {
//   //   employeeId: '2018100457',
//   //   email: 'leo@gmail.com',
//   //   firstname: 'Leo',
//   //   lastname: "Espino"
//   // },

// ];

// const array: { [x: string]: any; }[] = [];



@Component({
  selector: 'app-faculty-request',
  templateUrl: './faculty-request.component.html',
  styleUrls: ['./faculty-request.component.css']
})
export class FacultyRequestComponent implements OnInit {

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


  // openAlert() {
  //   // let value = event.target.innerHTML; 
  //   // console.log("value", value);









  //   if (confirm("Are you sure you want to delete this request?") == true) {

  //     // this.getUserFromTable()
  //     // this.delete()



  //   }

  //   // alert(this.userList.toString())

  // }

  async delete() {


    this.getUserFromTable()

    // let value = ""
    // // alert(String( user1?.employeeId))
    // $(".hit").click(function(){
    //  value=$(this). closest('tr'). children('td:first'). text();
    //   console.log(value);

    //   });

    // const { employeeId } = this.facRequestForm.value

    // let value = event.target.innerText; 
    // console.log("value", value[0]);

    // var user1 = this.userList.find(element =>
    //   element.employeeId == employeeId
    // )?.employeeId

    // await this.db.object('request/' + value).remove()
    
    setTimeout(() => {
      window.location.reload
      const id = String(localStorage.getItem('id'))
      
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        // buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          const ref = this.db.object('request/' + id).remove()
          this.getStarted()
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Request has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })

    }, 50)

    

    // setTimeout(() => {
    //   window.location.reload
    //   const id = String(localStorage.getItem('id'))
    //   //  alert(id)
    //   if (confirm('Are you sure you want to delete this request?') === true) {
    //     const ref = this.db.object('request/' + id).remove()
    //     alert('deleted')
    //     this.getStarted()

    //   }else{
    //     localStorage.clear()
    //   }

    //   //  const emp = this.empID = '123'

    // }, 50)
    await this.getStarted()
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



      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        // buttonsStyling: true
      })


      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, accept it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // const ref = this.db.object('request/' + id).remove()
          // this.getStarted()

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
              firstName: firstName1,
              lastName: lastName1,
              password: password1,
          
  
            })
  
            this.authService.logout().subscribe(() => {
              
              
              const id = String(localStorage.getItem('id'))
              //  alert(id)
  
              const ref = this.db.object('request/' + id).remove()
              
              this.getStarted()
  
              localStorage.clear();
              
            })
  
  
            // this.getUserFromTable();
          
       
  
            this.authService.login('admin@gmail.com', 'admin123').subscribe()
            
        
  
  
  
  
  
            //  const emp = this.empID = '1
  
  
  
  
          })





          // swalWithBootstrapButtons.fire(
          //   'Accepted!',
          //   'Request has been accepted.',
          //   'success'
          // )
        }  if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })




    

    }, 50)


  







  }



  getAllRequest() {

    return new Promise((resolve, reject) => {
      this.db.list('request').valueChanges().subscribe(value => {
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

    console.log(this.userList)
  }

  async ngOnInit(): Promise<void> {
    this.getStarted()
  }

  getValue(event: any) {
    let value = event.target.innerHTML;
    console.log("value", value);
  }





}
