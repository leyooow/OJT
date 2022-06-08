import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-personal-info-display',
  templateUrl: './personal-info-display.component.html',
  styleUrls: ['./personal-info-display.component.css']
})
export class PersonalInfoDisplayComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('p', 'pt', 'a2')
    pdf.setFontSize(25);
    pdf.setFont("Arial", 'bold');
    pdf.setTextColor('#072F6E');
    pdf.text('PERSONAL INFORMATION', 200,70);
    pdf.html(this.el.nativeElement,{
      margin: [100,20,100,145],
      callback: (pdf)=>{
        pdf.save("Personal Information.pdf")
      }
    })

  }

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}
