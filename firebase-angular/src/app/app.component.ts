import { Component } from '@angular/core';
import { 
Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from '@angular/fire/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-angular';

  constructor(public auth: Auth){

  }

  handleRegister(value: any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    })
  }
}
