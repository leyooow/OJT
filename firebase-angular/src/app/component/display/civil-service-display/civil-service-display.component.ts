import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-civil-service-display',
  templateUrl: './civil-service-display.component.html',
  styleUrls: ['./civil-service-display.component.css']
})
export class CivilServiceDisplayComponent implements OnInit {

 
  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}

