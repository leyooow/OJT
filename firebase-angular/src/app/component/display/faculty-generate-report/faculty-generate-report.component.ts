import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-faculty-generate-report',
  templateUrl: './faculty-generate-report.component.html',
  styleUrls: ['./faculty-generate-report.component.css']
})
export class FacultyGenerateReportComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$
  testModal: any;

  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private authService: AuthenticationService,
    private usersService: UsersService,
  ) { }

  async ngAfterViewInit() {

    await window.location.reload


  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }

}
