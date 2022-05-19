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
    pdf.html(this.el.nativeElement,{
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

