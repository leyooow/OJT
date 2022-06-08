import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from "jspdf";
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-educational-background-display',
  templateUrl: './educational-background-display.component.html',
  styleUrls: ['./educational-background-display.component.css'],




})


export class EducationalBackgroundDisplayComponent implements OnInit {

  @ViewChild('content',{static: false}) el!: ElementRef;

  makePDF(){
    let pdf=new jsPDF('p', 'pt', 'a2')
    pdf.setFontSize(25);
    pdf.setFont("Arial", 'bold');
    pdf.setTextColor('#072F6E');
    pdf.text('EDUCATIONAL BACKGROUND', 270,70);
    pdf.html(this.el.nativeElement,{
      margin: [100,20,100,145],
      callback: (pdf)=>{
        pdf.save("Educational Background.pdf")
      }
    })

  }

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}
