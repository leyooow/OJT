import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$
  testModal: any;

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

  PrintEducInfo() {
    let data = document.getElementById('educationalBackground')
    this.generateEducPDF(data)
  }

  generateEducPDF(htmlContent: any) {
    html2canvas(htmlContent).then(canvas => {
      let imgWidth = 210
      let imgHeigth = 250
      const contentDataURL = canvas.toDataURL('image/png', 1.0)
      let pdf = new jsPDF('p', 'mm', 'a4')
      var position = 5
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeigth)
      pdf.save('Educational_Background.pdf')

    })


  }

  PrintPersonalInfo() {
    let data = document.getElementById('personalInfo')
    this.generatePersonalPDF(data)
  }

  generatePersonalPDF(htmlContent: any) {
    html2canvas(htmlContent).then(canvas => {
      let imgWidth = 230
      let imgHeigth = 350
      const contentDataURL = canvas.toDataURL('image/png', 1.0)
      let pdf = new jsPDF('p', 'mm', 'a4')
      var position = 5
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeigth)
      pdf.save('Personal_Info.pdf')

    })


  }



}
