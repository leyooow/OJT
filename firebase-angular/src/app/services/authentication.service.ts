import { Injectable } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserInfo } from '@firebase/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

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

  signUp(email: string, password: string) {

    return from(createUserWithEmailAndPassword(this.auth, email, password)
    )
    
  }
  

  updateProfile(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Not Authenticated')

        return updateProfile(user, profileData)
        
      })
    )
  }

  logout() {
    return from(this.auth.signOut())
  }
}
