import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-educational-background-display',
  templateUrl: './educational-background-display.component.html',
  styleUrls: ['./educational-background-display.component.css'],
  

  

})


export class EducationalBackgroundDisplayComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}
