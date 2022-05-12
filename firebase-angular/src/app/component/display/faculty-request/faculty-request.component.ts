import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, onValue, ref } from '@angular/fire/database';
import { ProfileUser } from 'src/app/models/user-profile';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

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
  public userList: User[] | undefined

  constructor(
    public database: Database,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,

  ) { }

  getAllRequest() {

    return new Promise((resolve, reject) => {
      this.db.list('request').valueChanges().subscribe(value => {
        resolve(value)
      })
    })
  }

  async getStarted() {

    var users!: User[]
    await this.getAllRequest().then(value => {
      users = value as User[]
    })
    this.userList = users
    
    console.log(this.userList)
  }

  async ngOnInit(): Promise<void> {
    this.getStarted()
  }



}
