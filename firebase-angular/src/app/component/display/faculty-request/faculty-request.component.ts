import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, get, onValue, ref } from '@angular/fire/database';
import { ProfileUser } from 'src/app/models/user-profile';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import * as bootstrap from 'bootstrap';
import { user } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { first, switchMap } from 'rxjs';
import * as $ from 'jquery';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

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

   password: string = '';
    email: string = '';
    employeeId: string = '';
    firstName: string = '';
    lastName : string = ''; 

  empID:any

  signUpForm = new FormGroup({
    uid: new FormControl('',),
    firstname: new FormControl('', ),
    lastname: new FormControl('', ),
    employeeId: new FormControl('', ),
    email: new FormControl('', ),
    password: new FormControl('', ),
    confirmPassword: new FormControl('', ),
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


  openAlert() {
    // let value = event.target.innerHTML; 
    // console.log("value", value);

     
   

    
        

      

    if (confirm("Are you sure you want to delete this request?") == true) {
      
      // this.getUserFromTable()
      // this.delete()
      
      

    }

    // alert(this.userList.toString())

  }

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
     const id = String(sessionStorage.getItem('id'))
    //  alert(id)
    if (confirm('Are you sure you want to delete this request?') === true){
      const ref = this.db.object('request/' + id).remove()
      alert('deleted')
      this.getStarted()

    }
   
    
    //  const emp = this.empID = '123'
     
  },50)
    
     
      
    
  
    


   




  }

  async getUserFromTable() {
    var value: string
    $(".hit").click(function(){
       value=$(this). closest('tr'). children('td:first'). text();
        console.log(value);
        sessionStorage.setItem('id', value) 
     
        
        
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

   const password1 = String(localStorage.getItem('password')!)
   const email1 = String(localStorage.getItem('email')!)
   const employeeId1 = String(localStorage.getItem('employeeId')!)
   const firstName1 = String(localStorage.getItem('firstName')!)
   const lastName1 = String(localStorage.getItem('lastName')!)
    // email1 =  localStorage.getItem('email')
    // employeeId1 =  localStorage.getItem('employeeId')
    // firstName1 =  localStorage.getItem('firstName') 
    // lastName1 =  localStorage.getItem('lastName')   
    
    // setTimeout(() => {

    //   this.authService.signUp( email1, password1)
    // .pipe(
         

    //   switchMap(({ user: { uid } }) => this.usersService.addUser(
    //     { uid,  firstName: firstName1, 
    //       lastName: lastName1, employeeId: employeeId1, 
    //       email: email1, displayName: firstName1 + ' ' + lastName1, done: ''})
    //   ),

      

    

    //   this.toast.observe({
    //     success: 'Accepted',
    //     loading: 'Checking...',
    //     error: ({ message }) => `${message}`,
    //   })
    // ).subscribe(() => {
    //   this.authService.logout().subscribe(() => {
    //     this.router.navigate(['/login'])
        
    //   })
    // })

    // }, 200)
    

    this.getUserFromTable()


    await this.getStarted()


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

  getValue(event:any) {
    let value = event.target.innerHTML; 
    console.log("value", value);
}





}
