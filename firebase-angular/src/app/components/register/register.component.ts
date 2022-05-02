import { Component, OnInit } from '@angular/core';
import { 
  Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  } from '@angular/fire/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: Auth) { }

  ngOnInit(): void {
  }

  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any) => {
      console.log(response.user)
      alert('Successfully Registered1')
      
    })
    .catch((err) => {
      alert(err.message)
    })
  }
}
