import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth)

  constructor(private auth: Auth,
    private router: Router
  ) { }

  login(username: string, password: string) {
    
    return  from(signInWithEmailAndPassword(this.auth, username, password))
    
   

  }

  signUp(firstName: string, lastname: string, employeeId: string,
    email: string, password: string) {

    return from(createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: firstName + ' ' + lastname})))
    
  }
  

  logout() {
    return from(this.auth.signOut())
  }
}
