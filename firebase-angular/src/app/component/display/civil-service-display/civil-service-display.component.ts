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
    pdf.html(this.el.nativeElement,{
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

