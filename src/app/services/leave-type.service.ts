import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewLeaveType } from '../Models/view-leave-type.model';


@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private http: HttpClient) { }

  private viewLeaveTypeUrl = 'http://localhost:8080/hrm_system/leavetype';

  getLeaveType() {
    return this.http.get<ViewLeaveType[]>(this.viewLeaveTypeUrl);
  }

  updateLeaveType(leaveType){
    return this.http.put<ViewLeaveType>(this.viewLeaveTypeUrl+"/"+leaveType.id, leaveType);
  }
}
