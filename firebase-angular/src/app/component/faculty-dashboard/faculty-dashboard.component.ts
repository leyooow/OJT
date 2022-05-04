import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$
  testModal: any;

  constructor(private authService : AuthenticationService,
     private usersService: UsersService,
     ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
  }

  

}
