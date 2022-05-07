import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getDoc } from '@firebase/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  user$ = this.usersService.currentUserProfile$

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),

  })

  constructor(
    private authService : AuthenticationService, 
    private router : Router,
    private toast : HotToastService,
    private usersService : UsersService,
    private firestore : Firestore,) { }

  ngOnInit(): void {
  }
  
  get email() {
    return this.loginForm.get('email')
  }
  
  get password() {
    return this.loginForm.get('password')
  }

  submit() {

    // const { username, password2 } = this.loginForm.value

    if (!this.loginForm.valid){
      return
    }
    
    const { email, password } = this.loginForm.value
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in Succesfully',
        loading: 'Loggin in',
        error: 'Ther was an error'
      })
    ).subscribe(() =>{
      // if(email == "admin@gmail.com" && password == 'admin123'){
        const userID = getAuth().currentUser?.uid
        if(userID === 'mpVepQYe0xSLA1hA21fwcdIeiyQ2' ){
        this.router.navigate(['/admin-dashboard']);
      }else{
      
        
        this.router.navigate(['/personal-info-form']);
      }
      
    })
    
    
  }
}
