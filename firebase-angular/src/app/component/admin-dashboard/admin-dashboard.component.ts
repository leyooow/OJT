import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ref, onValue } from '@angular/fire/database';
import { Database } from '@angular/fire/database';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public userList!: Observable<ProfileUser>
  data1 : any

  user$ = this.usersService.currentUserProfile$
  
  constructor(private authService: AuthenticationService,
    private usersService: UsersService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private database: Database,
    private firestore : Firestore,
    private router : Router) { }

  async ngAfterViewInit() {

    await window.location.reload


  }
  ngOnInit(): void {


    this.router.navigate(['/admin-generate-report'])
    // setTimeout(() => {

    //   // get User$(): Observable<ProfileUser | null> {
    //   //   return this.authService.currentUser$.pipe(
    //   //     switchMap(user => {
    
    //   //       if (!user?.uid) {
    //   //         return of(null)
    //   //       }
    
    //   //       const ref = doc(this.firestore, 'users', user?.uid)
    //   //       return docData(ref) as Observable<ProfileUser>
    
    //   //     })
    //   //   )
    //   // }
      
    //   const userId = localStorage.getItem('id')
    //   const uidRef = ref(this.database, 'users2/' + userId + '/uid');
    //   onValue(uidRef, (snapshot) => {
    //     const uid = snapshot.val();
    //     console.log(uid)


    //     const ref = doc(this.firestore, 'users', uid)

    //    const data = docData(ref) as Observable<ProfileUser>


    //    this.userList = data
      

        
      
    //   })

     

    
     
      

    // }, 50);
    

  }

  getUserFromTable() {

    localStorage.clear()

    var value: string
    $(".hit").click(function () {
      value = $(this).closest('tr').children('td:first').text();
      console.log(value);
      localStorage.setItem('id', value)



    });
  
  }


  passReset(){
    const email = 'leoespino999@gmail.com'
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('Password reset link sent to ' + email)
    })
  }

  details(){
    const userId = localStorage.getItem('id')
    const data = this.afs.collection('users').doc(userId!).get()
    console.log(data)
  }

}
