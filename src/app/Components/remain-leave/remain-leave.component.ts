import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-remain-leave',
  templateUrl: './remain-leave.component.html',
  styleUrls: ['./remain-leave.component.css']
})
export class RemainLeaveComponent implements OnInit {
leavesArray:any=[]
  constructor(private leaveService:LeaveService) { }

  ngOnInit() {
    this.leaveService.getRemainingLeaveByUserId(2).subscribe(data => {
      console.log(data);
      this.leavesArray=data;
  
    })
  }

}
