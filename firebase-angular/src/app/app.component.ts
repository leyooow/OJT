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
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

  opened = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  sidenav1!: MatSidenav
  

// civil_service_display: boolean = false;
// educational_background_display: boolean = false;
// personal_info_display: boolean = false;
// training_display: boolean = false;
// work_exp_display: boolean = false;

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


  // userMenu(){
  //   const userId = getAuth().currentUser?.uid
  //   if(userId == "fM6Ko90ezgSzZJ04sbCdGMmbOYt1"){
  //    document.getElementById('editProfile')!.remove()
  //   }
  // }

  logout() {

    this.authService.logout().subscribe(() => {
      this.router.navigate([''])
      this.sidenav.close()
      this.router.navigate(['/login'])
      localStorage.clear();

    })
  }

  dashboard() {
    const userID = getAuth().currentUser?.uid


    if (userID == 'fM6Ko90ezgSzZJ04sbCdGMmbOYt1') {
      this.router.navigate(['/admin-dashboard'])
    } else {
      this.router.navigate(['/faculty-dashboard'])
    }
    this.sidenav.close()

  }

  profile() {

    const userID = getAuth().currentUser?.uid

    if (userID == 'fM6Ko90ezgSzZJ04sbCdGMmbOYt1') {
      return
    } else {
      this.router.navigate(['/profile'])
    }
    this.sidenav.close()
  }

  openModal() {
    this.testModal = new bootstrap.Modal(document.getElementById('sigoutModal')!, {
      keyboard: false
    })
    // console.log(getAuth().currentUser?.uid)
    this.testModal.show()

  }
  // check() {
  //   const userID = getAuth().currentUser?.uid
  //   if (userID == 'mpVepQYe0xSLA1hA21fwcdIeiyQ2') {
      
  //   }
  // }

  openSidenav(){
   
    const userId = getAuth().currentUser?.uid
    this.opened=!this.opened
    if(userId == "fM6Ko90ezgSzZJ04sbCdGMmbOYt1"){
     document.getElementById('personalInfo')!.style.display="none"
     document.getElementById('EducBack')!.style.display="none"  
     document.getElementById('civilService')!.style.display="none"  
     document.getElementById('workExp')!.style.display="none" 
     document.getElementById('traning')!.style.display="none" 

     document.getElementById('facultyReq')!.style.display="block"
     document.getElementById('FacultyList')!.style.display="block"
     


     
    }else{

     document.getElementById('personalInfo')!.style.display="block"
     document.getElementById('EducBack')!.style.display="block"
     document.getElementById('civilService')!.style.display="block"
     document.getElementById('workExp')!.style.display="block"
     document.getElementById('traning')!.style.display="block"

     document.getElementById('facultyReq')!.style.display="none"  
     document.getElementById('FacultyList')!.style.display="none" 

    }
  }


  showPersonalInfo(){
    this.sidenav.close()
    this.router.navigate(['/personal-info-display'])
  }

  showEducBack(){
    this.sidenav.close()
    this.router.navigate(['/educational-background-display'])
  }  

  showCivilService(){
    this.sidenav.close()
    this.router.navigate(['/civil-service-display'])
  }

  showWorkExp(){
    this.sidenav.close()
    this.router.navigate(['/work-experience-display'])
  }

  showTrainings(){
    this.sidenav.close()
    this.router.navigate(['/training-display'])
  }

  showFacultyRequest(){
    this.sidenav.close()
    this.router.navigate(['/faculty-request'])
  }

  showFacultyList(){
    this.sidenav.close()
    this.router.navigate(['/faculty-list'])
  }

 
  


}
