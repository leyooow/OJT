  import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore, updateDoc, getDoc, getFirestore } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../models/user-profile';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  get currentUserProfile$() : Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap( user => {
        
        if(!user?.uid) {
          return of(null)
        } 

        const ref = doc(this.firestore, 'users', user?.uid)
        return docData(ref) as Observable<ProfileUser>

      })
    )
  }
  constructor(private firestore: Firestore, private authService: AuthenticationService, private afs : AngularFirestore) { }

  addUser(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid)
    return from(setDoc(ref, user));
  }

  addUser2(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'request', user?.uid)
    return from(setDoc(ref, user));
  }

  updateUser(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid)
    return from(updateDoc(ref, { ...user }));
    
  }

  updateInfo(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid)
    return from( updateDoc(ref, { ...user }));
  }

getDocdata(user: ProfileUser, done: any)   {
  const ref = doc(this.firestore, 'users', user?.uid, done).toString()
  return ref
}

getDoneData(uid: any)  : AngularFirestoreDocument<ProfileUser> {
  // const firebaseConfig = {
  //     apiKey: "AIzaSyAZwTfopp-Qz3HFzGNBc5iYsBpA6U1A4FI",
  //     authDomain: "ojt1-6eeca.firebaseapp.com",
  //     projectId: "ojt1-6eeca",
  //     storageBucket: "ojt1-6eeca.appspot.com",
  //     messagingSenderId: "586333622765",
  //     appId: "1:586333622765:web:ff90f5bef683338019d7e4",
  //     measurementId: "G-0L3NSLG8QZ"
  //   };

  //   const app = initializeApp(firebaseConfig)
  //   const db = getFirestore(app)

  const userID = getAuth().currentUser?.uid
    
  return this.afs.collection('users').doc(userID);

    
  
}

}
