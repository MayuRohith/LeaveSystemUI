import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddLeaveType } from '../../Models/add-leave-type';
import { LeaveTypeService } from '../../services/leave-type.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  addLeaveTypes: AddLeaveType[];
  addLeaveTypesObj = new AddLeaveType();

  constructor(private leaveType: LeaveTypeService) { }

  private addLeaveUrl = 'http://localhost:8080/hrm_system/leavetype';

  ngOnInit() {
  }
  addLeaveType() {
    this.leaveType.addLeaveType(this.addLeaveTypesObj).subscribe(data => {
      this.addLeaveType();
      console.log(data);
    });
  }
}
