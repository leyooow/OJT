import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-work-experience-display',
  templateUrl: './work-experience-display.component.html',
  styleUrls: ['./work-experience-display.component.css']
})
export class WorkExperienceDisplayComponent implements OnInit {

 
  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}

