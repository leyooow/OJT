import { Component } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$ = this.usersService.currentUserProfile$

  constructor(
    private authService : AuthenticationService,
    private router : Router,  
    private usersService : UsersService,  
    private firestore : Firestore,    
    ){

  }

  logout(){
  
    this.authService.logout().subscribe(() => {
      this.router.navigate([''])
    })
  }

  dashboard(){
    const userID = getAuth().currentUser?.uid

    if(userID == 'wHVdJzT0zwXpEMamSGobwrdlQJn2'){
      this.router.navigate(['/admin-dashboard'])
    }else{
      this.router.navigate(['/faculty-dashboard'])
    }
    
  }
}
