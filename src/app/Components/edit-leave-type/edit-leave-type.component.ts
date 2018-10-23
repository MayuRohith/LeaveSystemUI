import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { ViewLeaveType } from 'src/app/Models/view-leave-type.model';
import { LeaveTypeService } from 'src/app/services/leave-type.service';

@Component({
  selector: 'app-edit-leave-type',
  templateUrl: './edit-leave-type.component.html',
  styleUrls: ['./edit-leave-type.component.css']
})
export class EditLeaveTypeComponent implements OnInit {

  leaveTypeObj = new ViewLeaveType();
  constructor(private interactionService: InteractionService, private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.getRecord();
  }

  getRecord(){
    this.interactionService.leaveTypeDataSource$.subscribe(data=>{
      // alert("test");
      console.log(data);
      this.leaveTypeObj= Object.assign({}, data);
    })
  }

  updateLeaveType(){
    this.leaveTypeService.updateLeaveType(this.leaveTypeObj).subscribe(data=>{
      console.log("Update Success");
      this.interactionService.upadateMsg("success");
    })
  }

}
