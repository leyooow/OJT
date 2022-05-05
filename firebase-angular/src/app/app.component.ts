import { Component } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$ = this.usersService.currentUserProfile$
  testModal : Modal |undefined

  constructor(
    private authService : AuthenticationService,
    private router : Router,  
    private usersService : UsersService,  
    private firestore : Firestore,    
    ){

  }

  ngOnInit(): void {
    const userID = getAuth().currentUser?.uid
    if(userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2'){
      
     
    }
    
  }

  logout(){
  
    this.authService.logout().subscribe(() => {
      this.router.navigate([''])
    })
  }

  dashboard(){
    const userID = getAuth().currentUser?.uid
    

    if(userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2'){
      this.router.navigate(['/admin-dashboard'])
    }else{
      this.router.navigate(['/faculty-dashboard'])
    }
    
  }

  profile(){

    const userID = getAuth().currentUser?.uid

    if(userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2'){
      return
    }else{
      this.router.navigate(['/profile'])
    }
  }

  openModal(){
    this.testModal = new bootstrap.Modal(document.getElementById('sigoutModal')!,{
      keyboard: false
    })
    this.testModal.show()
    
  }

  
}
