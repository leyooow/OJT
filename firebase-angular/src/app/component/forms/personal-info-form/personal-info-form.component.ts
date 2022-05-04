import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {

  PersonalInfoForm = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    nameExtension: new FormControl(''),
    dateOfBirth: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    placeOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    civilStatus: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    bloodType: new FormControl('', Validators.required),
    gsis: new FormControl('', Validators.required),
    pagibig: new FormControl('', Validators.required),
    philhealth: new FormControl('', Validators.required),
    sss: new FormControl('', Validators.required),
    tin: new FormControl('', Validators.required),
    citezenship: new FormControl('', Validators.required),
    houseBlockResident: new FormControl('', Validators.required),
    streetResident: new FormControl('', Validators.required),
    subdivisionResident: new FormControl('', Validators.required),
    barangayResident: new FormControl('', Validators.required),
    municipalityResident: new FormControl('', Validators.required),
    provinceResident: new FormControl('', Validators.required),
    zipCodeResident: new FormControl('', Validators.required),
    houseBlockPermanent: new FormControl('', Validators.required),
    streetPermanent: new FormControl('', Validators.required),
    subdivisionPermanent: new FormControl('', Validators.required),
    barangayPermanent: new FormControl('', Validators.required),
    municipalityPermanent: new FormControl('', Validators.required),
    provincePermanent: new FormControl('', Validators.required),
    zipCodePermanent: new FormControl('', Validators.required),
    telephoneNo: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required),
    alternateEmail: new FormControl('', Validators.required),




    



    
  })

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService,) { }

  ngOnInit(): void {
  }

}
