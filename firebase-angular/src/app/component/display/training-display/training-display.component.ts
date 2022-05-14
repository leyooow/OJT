import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-training-display',
  templateUrl: './training-display.component.html',
  styleUrls: ['./training-display.component.css']
})
export class TrainingDisplayComponent implements OnInit {

  
  user$ = this.usersService.currentUserProfile$

  constructor(private usersService : UsersService,
    ) { }

  ngOnInit(): void {
  }

}
