import { Component, OnInit } from '@angular/core';

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
    employeeId: '2018100457',
    email: 'leo@gmail.com',
    firstName: 'Leo', 
    lastName: 'Espino'
  },
  
];

@Component({
  selector: 'app-faculty-request',
  templateUrl: './faculty-request.component.html',
  styleUrls: ['./faculty-request.component.css']
})
export class FacultyRequestComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
