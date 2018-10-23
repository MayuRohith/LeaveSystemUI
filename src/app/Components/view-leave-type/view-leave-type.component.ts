import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leave-type.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {
  leaveTypes: ViewLeaveType[];
  leaveTypeObj = new ViewLeaveType();

  constructor(private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.viewLeaveType();
  }
  viewLeaveType() {
    return this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypes = data;
      console.log(data);
    });
  }

  getLeaveTypeById(leaveType) {
    this.leaveTypeObj = leaveType;
    console.log(this.leaveTypeObj);
  }

  deleteDepartment(department) {
    return this.leaveTypeService.deleteLeaveType(this.leaveTypeObj).subscribe(data => {
      console.log(this.leaveTypeObj);
      this.viewLeaveType();
    });
  }

}
