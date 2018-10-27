import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { LeaveRequestManage } from 'src/app/Models/leave-request-manage';
import { LeaveRequest } from 'src/app/Models/leave-request';
import { InteractionService } from '../../UIService/interaction.service';

@Component({
  selector: 'app-pending-req',
  templateUrl: './pending-req.component.html',
  styleUrls: ['./pending-req.component.css']
})
export class PendingReqComponent implements OnInit {

  leaveRequests: LeaveRequest[];
  leaveRequestManageObj = new LeaveRequestManage();

  constructor(private leaveRequestService: LeaveRequestService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getAllLeaveRequest();
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequest()
      .subscribe(data => {
        this.leaveRequests = data;
        console.log(data);
      });
  }

  approveLeave(lvRequestId) {
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 2;
    this.leaveRequestManageObj.statusId = 2;
    this.leaveRequestManageObj.rejectreason = null;
    // console.log(this.leaveRequestManageObj);
    this.leaveRequestService.approvedLeaveRequest(this.leaveRequestManageObj).subscribe(data => {
      this.interactionService.upadateMsg("success");
      this.getAllLeaveRequest();
    },
      error => {
        this.interactionService.upadateMsg("fail");
      });
  }

  getLeaveRejectId(lvRequestId) {
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 1;
    this.leaveRequestManageObj.statusId = 3;
    // this.leaveRequestManageObj.rejectreason=null;
    console.log(this.leaveRequestManageObj);
  }

  rejectLeave() {
    console.log(this.leaveRequestManageObj);
    this.leaveRequestService.rejectLeaveRequest(this.leaveRequestManageObj).subscribe(
      data => {
        this.interactionService.upadateMsg("success");
        this.getAllLeaveRequest();
      },
      error => {
        this.interactionService.upadateMsg("fail");
      }
    );
  }

}
