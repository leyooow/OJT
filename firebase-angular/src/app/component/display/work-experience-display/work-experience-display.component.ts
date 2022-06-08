import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-work-experience-display',
  templateUrl: './work-experience-display.component.html',
  styleUrls: ['./work-experience-display.component.css']
})
export class WorkExperienceDisplayComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('p', 'pt', 'a2')
    pdf.setFontSize(20);
    pdf.setFont("Arial", 'bold');
    pdf.setTextColor('#072F6E');
    pdf.text('WORK EXPERIENCE', 300,70);
    pdf.html(this.el.nativeElement,{
      margin: [100,20,100,145],
      callback: (pdf)=>{
        pdf.save("Work Experience.pdf")
      }
    })

  }

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}

