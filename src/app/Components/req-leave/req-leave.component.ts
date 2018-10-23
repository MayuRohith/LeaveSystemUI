import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leave-type.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';
import { FormGroup, FormControl } from '@angular/forms';
import { LeaveRequest } from 'src/app/Models/leave-request';
import { LoginService } from 'src/app/Services/login.service';
import { LeaveRequestService } from 'src/app/services/leave-request.service';

@Component({
  selector: 'app-req-leave',
  templateUrl: './req-leave.component.html',
  styleUrls: ['./req-leave.component.css']
})
export class ReqLeaveComponent implements OnInit {

  leaveTypes: ViewLeaveType[];

  leaveRequestObj = new LeaveRequest();

  userId: string;
  

  constructor(
    private leaveTypeService: LeaveTypeService, 
    private loginService: LoginService,
    private leaveRequestService:LeaveRequestService) { }

  ngOnInit() {
    this.viewAllLeaveTypes();
   
  }

  viewAllLeaveTypes() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypes = data;
      console.log(data);
    });
  }

  leaveRequestForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    leaveType: new FormControl(''),
    reason: new FormControl('')
  });

  onSubmit(){
    var startDate = new Date(this.leaveRequestForm.value.startDate);
    var endDate = new Date(this.leaveRequestForm.value.endDate);

    var leaveDays =endDate.getTime() - startDate.getTime();
    var days = leaveDays / (1000 * 60 * 60 * 24) + 1;
    
    this.leaveRequestObj.leaveDays= days;

    this.leaveRequestObj.leaveTypeId = this.leaveRequestForm.value.leaveType;
    this.leaveRequestObj.reason = this.leaveRequestForm.value.reason;
    this.leaveRequestObj.startDate = startDate;
    this.leaveRequestObj.endDate = endDate;
    this.leaveRequestObj.statusId=1;

    this.loginService.loginCredential$.subscribe(data => {
      this.leaveRequestObj.userId = data.userId;
    });
    
    console.log(this.leaveRequestObj);

this.leaveRequestService.createLeaveRequest(this.leaveRequestObj).subscribe(msg => {
  alert("leave request applied");
})
  }


}
