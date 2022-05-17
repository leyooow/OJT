import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


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


  // public downloadAsPDF() {
  //   const pdfTable = document.getElementById('educationalBackground')
  //   var html = htmlToPdfmake(pdfTable!.innerHTML);
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).download(); 
     
  // }


//personal
  PrintPersonalInfo() {
    let data = document.getElementById('personalInfo')
    this.generatePersonalPDF(data)
  }

  generatePersonalPDF(htmlContent: any) {
    html2canvas(htmlContent).then(canvas => {
      let imgWidth = 210
      let imgHeigth = 250
      
      var pdf = new jsPDF('p', 'pt', 'a4')
      const contentDataURL = canvas.toDataURL('image/png', 1.0)
      var position = 10

    
      pdf.addImage(contentDataURL, 'PNG', 20, position, imgWidth, imgHeigth)
      pdf.addPage('a4','p')
      pdf.save('Personal_Info.pdf')

    })


  }


  // educ

  PrintEducInfo() {
    let data2 = document.getElementById('educationalBackground')
    this.generateEducPDF(data2)
  }



  generateEducPDF(htmlContent2: any) {

    html2canvas(htmlContent2, {
     
  });
     
      

    html2canvas(htmlContent2).then(canvas => {
      let imgWidth = 550
      let imgHeigth = 800
      var doc = new jsPDF('p', 'pt');
      const contentDataURL = canvas.toDataURL('image/png2', 1.0)
      
      let pdf = new jsPDF('p', 'pt', 'a4')
      var position = 10
     
      
        pdf.addImage(contentDataURL, 'PNG', 20, position, imgWidth, imgHeigth)
        pdf.addPage('a4','p')
        


        pdf.save('Educational_Background.pdf')


        
      
    

    })


  }

  // civil

  PrintCivilInfo() {
    let data3 = document.getElementById('civilService')
    this.generateCivilPDF(data3)
  }

  generateCivilPDF(htmlContent3: any) {
    html2canvas(htmlContent3).then(canvas => {
      let imgWidth = 230
      let imgHeigth = 350
      const contentDataURL1 = canvas.toDataURL('image/png3', 1.0)
      let pdf = new jsPDF('p', 'mm', 'a4')
      
      var position = 5
      pdf.addImage(contentDataURL1, 'PNG', 20, position, imgWidth, imgHeigth)
      pdf.save('Civil_Service_Info.pdf')

      

    })


  }





}
