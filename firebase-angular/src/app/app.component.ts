import { Component, ViewChild } from '@angular/core';
import { getAuth, user } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';
import { BreakpointObserver } from '@angular/cdk/layout'
import { ProfileUser } from './models/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  opened = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  sidenav1!: MatSidenav


  user$ = this.usersService.currentUserProfile$
  testModal: Modal | undefined

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private usersService: UsersService,
    private firestore: Firestore,
    private observer: BreakpointObserver,
  ) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over'
        this.sidenav.close()

        // }else{
        //   this.sidenav.mode = 'side'
        //   this.sidenav.open()

      }
    })
  }

  ngOnInit(): void {

    // this.check()


  }



  logout() {

    this.authService.logout().subscribe(() => {
      this.router.navigate([''])
      this.sidenav.close()
      this.router.navigate(['/login'])

    })
  }

  dashboard() {
    const userID = getAuth().currentUser?.uid


    if (userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2') {
      this.router.navigate(['/admin-dashboard'])
    } else {
      this.router.navigate(['/faculty-dashboard'])
    }

  }

  profile() {

    const userID = getAuth().currentUser?.uid

    if (userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2') {
      return
    } else {
      this.router.navigate(['/profile'])
    }
  }

  openModal() {
    this.testModal = new bootstrap.Modal(document.getElementById('sigoutModal')!, {
      keyboard: false
    })
    console.log(getAuth().currentUser?.uid)
    this.testModal.show()

  }
  // check() {
  //   const userID = getAuth().currentUser?.uid
  //   if (userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2') {
      
  //   }
  // }

  


}
