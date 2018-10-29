import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-user-leave-history',
  templateUrl: './user-leave-history.component.html',
  styleUrls: ['./user-leave-history.component.css']
})
export class UserLeaveHistoryComponent implements OnInit {

  constructor(private interactionService:InteractionService) { }
  firstName: string;
  lastName: string;
  userName: string;

  ngOnInit() {
    this.interactionService.userInfo$.subscribe(data=>{
      console.log(data);
      // this.firstName=data.firstName;
      // this.lastName=data.lastName;
      this.firstName=data;
    })
  }

}
