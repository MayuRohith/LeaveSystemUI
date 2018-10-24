import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { LeaveRequest } from 'src/app/Models/leave-request';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  leaveRequests: LeaveRequest[];

  constructor(private leaveRequestService: LeaveRequestService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getLeaveHistory();
    this.refreshTable();
  }

  getLeaveHistory(){
    this.leaveRequestService.getAllLeaveRequest().subscribe(data=>{
      this.leaveRequests=data;
    })
  }

  refreshTable(){
    this.interactionService.msgDataSource$.subscribe(data=>{
      this.getLeaveHistory();
    })
  }

}
