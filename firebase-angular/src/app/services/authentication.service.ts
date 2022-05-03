import { Injectable } from '@angular/core';
import {Auth, authState} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth)

  constructor(private auth: Auth,
            private router: Router          
    ) { }

  login(username: string, password: string){
   

   
      return from(signInWithEmailAndPassword(this.auth, username, password))
  }

  logout() {
    return from(this.auth.signOut())
  }
}
