import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$
  constructor(private authService : AuthenticationService,
    private usersService : UsersService) { }

  ngOnInit(): void {

 

    

  }

}
