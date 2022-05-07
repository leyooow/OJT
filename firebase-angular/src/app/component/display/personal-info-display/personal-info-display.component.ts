import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-personal-info-display',
  templateUrl: './personal-info-display.component.html',
  styleUrls: ['./personal-info-display.component.css']
})
export class PersonalInfoDisplayComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}
