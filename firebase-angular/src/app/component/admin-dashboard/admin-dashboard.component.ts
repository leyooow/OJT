import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$
  constructor(private authService: AuthenticationService,
    private usersService: UsersService,
    private afAuth: AngularFireAuth,) { }

  async ngAfterViewInit() {

    await window.location.reload


  }
  ngOnInit(): void {

  }

  passReset(){
    const email = 'leoespino999@gmail.com'
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('Password reset link sent to ' + email)
    })
  }

}
