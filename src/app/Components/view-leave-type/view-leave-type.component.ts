import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/services/leave-type.service';
import { ViewLeaveType } from 'src/app/Models/view-leave-type.model';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {

  leaveTypes: ViewLeaveType[];
  constructor(private leaveTypeService: LeaveTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.viewLeaveType();
    this.observeChange();
  }

  viewLeaveType(){
    this.leaveTypeService.getLeaveType().subscribe(data=>{
      this.leaveTypes=data;
    })
  }

  getLeaveTypeById(leaveType){
    this.interactionService.sendLeaveType(leaveType);
    console.log(leaveType);
  }

  observeChange(){
    this.interactionService.msgDataSource$.subscribe(data=>{
      console.log(data);
      this.viewLeaveType();
    })
  }

}
