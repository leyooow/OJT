import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

import { Database, set, ref, update, onValue } from '@angular/fire/database'
import { getAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';


export function passwordsMatchValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password = control.get('password')?.value
    const confirmPassword = control.get('confirmPassword')?.value

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true

      }
    }
    return null
  }



}





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  empID: any


  signUpForm = new FormGroup({
    uid: new FormControl('',),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    done: new FormControl('',),
  }, { validators: passwordsMatchValidator() })

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService,
    public database: Database,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  private setRealtimeDbData() {

    // const userId = getAuth().currentUser?.uid.toString();
    const { employeeId, email, uid, firstname, lastname, password } = this.signUpForm.value;
    const ref1 = ref(this.database, 'request/' + employeeId)
    const checkEmpId = ref(this.database, 'users2/' + employeeId + '/employeeId');
    // const checkEmail = ref(this.database, 'users2/' + employeeId + '/email');


    onValue(checkEmpId, (snapshot) => {
      this.empID = snapshot.val();

      if (this.empID !== null) {


        // alert('Employee ID already used')
        document.getElementById('empIdError')!.style.display="block"




      }

      else {

        // alert('registered!')


        set(ref1, {

          employeeId: employeeId,
          email: email,
          uid: uid,
          firstName: firstname,
          lastName: lastname,
          password: password,

        })


        // alert("Registration request sent!")
        
        this.router.navigate(['/login'])
        localStorage.clear();


      }




    })













    // localStorage.setItem('uid', uid)
    // localStorage.setItem('password', password)
    // localStorage.setItem('email', email)
    // localStorage.setItem('employeeId', employeeId)
    // localStorage.setItem('firstName', firstname) 
    // localStorage.setItem('lastName1', lastname)   






    // const starCountRef = ref(this.database, 'users/' + userId + '/email' );
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   alert(data)
    // })



  }

  employeeIdValidate() {
    const userId = getAuth().currentUser?.uid.toString();
    const { employeeId, email, uid } = this.signUpForm.value;
    const ref1 = ref(this.database, 'users/' + employeeId)

    const starCountRef = ref(this.database, 'users/' + employeeId + '/employeeId');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

    })





  }




  submit() {

    if (!this.signUpForm.valid) return

    this.setRealtimeDbData()

    Swal.fire(
      'Registration Sent',
      'Please wait for the admin to very your registration',
      'success'
    )

    // alert('Registration request sent')
    // this.router.navigate(['/login'])

    // const {employeeId,  firstname, lastname, email, password, done, } = this.signUpForm.value

    // this.authService.signUp( email, password)
    // .pipe(

    //   switchMap(({ user: { uid } }) => this.usersService.addUser(
    //     { uid,  firstName: firstname, 
    //       lastName: lastname, employeeId: employeeId, 
    //       email, displayName: firstname + ' ' + lastname, done: ''})
    //   ),





    //   this.toast.observe({
    //     success: 'Successfully Registered',
    //     loading: 'Checking..',
    //     error: ({ message }) => `${message}`
    //   })
    // ).subscribe(() => {
    //   this.authService.logout().subscribe(() => {
    //     this.router.navigate(['/login'])
    //   })
    // })

    // this.employeeIdValidate()




  }

  get firstname() {
    return this.signUpForm.get('firstname')
  }

  get lastname() {
    return this.signUpForm.get('lastname')
  }

  get employeeId() {
    return this.signUpForm.get('employeeId')
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password() {
    return this.signUpForm.get('password')
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')
  }


}


