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

  // countries = COUNTRIES;
  public userList!: ProfileUser[]
  

  public id: string | undefined;

  constructor(
    public database: Database,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,

  ) { }


  openAlert() {


    if (confirm("Are you sure you want to delete this request?") == true) {
      this.delete()
      
    }

    // alert(this.userList.toString())

  }

  getUserFromTable(id: string){

 

  }

  

  async accept(){
    alert('Accepted')
    await this.getStarted()


  }

  async delete(){

    var user1 = this.userList.find(element => {
      return element.employeeId == this.id
      })
      this.id = user1?.employeeId
      // alert(String( user1?.employeeId))

    await this.db.object('request/' + this.id).remove()
    
  
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





}
