import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf';

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

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


  // public downloadAsPDF() {
  //   const pdfTable = document.getElementById('educationalBackground')
  //   var html = htmlToPdfmake(pdfTable!.innerHTML);
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).download(); 
     
  // }


//personal
  

  //  PrintPersonalInfo() {
  //   let data2 = document.getElementById('personalInfo')
  //   this.generatePersonalPDF(data2)
  // }



  // generatePersonalPDF(htmlData: any) {

  //   html2canvas(htmlData, {
     
  // });
     
      

  //   html2canvas(htmlData).then((canvas) => {
  //     let imgWidth = 208
  //     let imgHeigth = (canvas.height * imgWidth) / canvas.width;
  //     const contentDataURL = canvas.toDataURL('image/png2')
      
  //     let pdf = new jsPDF('p', 'mm', 'a4')
  //     var position = 0
     
      
      
        
  //       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeigth)
      
        


  //       pdf.save('Personal_Info.pdf')


        
      
    

  //   })


  // }


  // educ

  // PrintEducInfo() {
  //   let data2 = document.getElementById('educationalBackground')
  //   this.generateEducPDF(data2)
  // }



  // generateEducPDF(htmlData: any) {

  //   html2canvas(htmlData, {
     
  // });
     
      

  //   html2canvas(htmlData).then(canvas => {
  //     let imgWidth = 520
  //     let imgHeigth = 800
  //     const contentDataURL = canvas.toDataURL('image/png2')
      
  //     let pdf = new jsPDF('p', 'pt', 'a4')
  //     var position = 10
     
      
      
        
  //       pdf.addImage(contentDataURL, 'PNG', 20, position, imgWidth, imgHeigth)
      
        


  //       pdf.save('Educational_Background.pdf')


        
      
    

  //    })


  //  }

  // civil

  // PrintCivilInfo() {
  //   let data3 = document.getElementById('civilService')
  //   this.generateCivilPDF(data3)
  // }

  // generateCivilPDF(htmlContent3: any) {
  //   html2canvas(htmlContent3).then(canvas => {
  //     let imgWidth = 230
  //     let imgHeigth = 350
  //     const contentDataURL1 = canvas.toDataURL('image/png3', 1.0)
  //     let pdf = new jsPDF('p', 'mm', 'a4')
      
  //     var position = 5
  //     pdf.addImage(contentDataURL1, 'PNG', 20, position, imgWidth, imgHeigth)
  //     pdf.save('Civil_Service_Info.pdf')

      

  //   })


  // }





}
