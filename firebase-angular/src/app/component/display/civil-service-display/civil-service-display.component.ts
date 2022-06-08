import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-civil-service-display',
  templateUrl: './civil-service-display.component.html',
  styleUrls: ['./civil-service-display.component.css']
})
export class CivilServiceDisplayComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('p', 'pt', 'a2')
    pdf.setFontSize(25);
    pdf.setFont("Arial", 'bold');
    pdf.setTextColor('#072F6E');
    pdf.text('CIVIL SERVICE', 250,80);
    pdf.html(this.el.nativeElement,{
      margin: [100,20,100,145],
      callback: (pdf)=>{
        pdf.save("Civil Service Eligibility.pdf")
      }
    })

  }

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}

