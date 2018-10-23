import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leave-type.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';

@Component({
  selector: 'app-req-leave',
  templateUrl: './req-leave.component.html',
  styleUrls: ['./req-leave.component.css']
})
export class ReqLeaveComponent implements OnInit {

  leaveTypes: ViewLeaveType[];

  constructor(private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.viewAllLeaveTypes();
  }

  viewAllLeaveTypes() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypes = data;
      console.log(data);
    });
  }
}
