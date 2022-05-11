import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, onValue, ref,  } from '@angular/fire/database';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UsersService } from 'src/app/services/users.service';

interface user {
  employeeId: string;
  email: string;
  firstName: string;
  lastName: string;
}


const USERS: user[] = [
  {
    employeeId: '2018100457',
    email: 'leo@gmail.com',
    firstName: 'Leo', 
    lastName: 'Espino'
  },
  {
    employeeId: '2018100458',
    email: 'leo1@gmail.com',
    firstName: 'Leyow', 
    lastName: 'Espino'
  },
  
];



@Component({
  selector: 'app-faculty-request',
  templateUrl: './faculty-request.component.html',
  styleUrls: ['./faculty-request.component.css']
})
export class FacultyRequestComponent implements OnInit {
  



  users = USERS

  constructor(private toast: HotToastService,
    private usersService: UsersService,
    private router: Router,
    private firestore: Firestore,
    private afs: AngularFirestore,
    public database : Database,) { }

    


    

  ngOnInit(): void {
  }

  getRequest(){

    // data = USERS;

    const starCountRef = ref(this.database, 'users/' )

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      

      
  })

}

}
