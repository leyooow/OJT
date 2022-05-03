import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  FormControl, 
  FormGroup, 
  ValidationErrors, 
  ValidatorFn, 
  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';


export function passwordsMatchValidator() :  ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

  const password = control.get('password')?.value
  const confirmPassword = control.get('confirmPassword')?.value
  
  if(password && confirmPassword && password !== confirmPassword){
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

  signUpForm = new FormGroup({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('', Validators.required),
    employeeId : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
    password : new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }, {validators: passwordsMatchValidator() })

  constructor(private authService : AuthenticationService, 
    private router : Router,
    private toast : HotToastService,  ) { }

  ngOnInit(): void {
  }

  submit(){

    if(!this.signUpForm.valid) return

    const { firstname, lastname, employeeId, email, password } = this.signUpForm.value
    this.authService.signUp(firstname, lastname, employeeId, email, password).pipe(
      this.toast.observe({
        success:'Successfully Registered',
        loading: 'Checking..',
        error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/faculty-dashboard'])
    })


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
