import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from "jspdf";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-faculty-generate-report',
  templateUrl: './faculty-generate-report.component.html',
  styleUrls: ['./faculty-generate-report.component.css']
})
export class FacultyGenerateReportComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('p', 'pt', 'a2')
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("Faculty Information.pdf")
      }
    })

  }

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
