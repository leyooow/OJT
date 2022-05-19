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
    pdf.html(this.el.nativeElement,{
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
