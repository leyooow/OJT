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
import { first } from 'rxjs';
import * as $ from 'jquery';

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

  empID:any


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
     const id = String(localStorage.getItem('id'))
    //  alert(id)
    alert(id)
     const ref = this.db.object('request/' + id).remove()
    //  const emp = this.empID = '123'
     
  },50)
    
     
      
    
  
    


    await this.getStarted()




  }

  async getUserFromTable() {
    var value: string
    $(".hit").click(function(){
       value=$(this). closest('tr'). children('td:first'). text();
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
