import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { Subject } from 'rxjs';
import { ViewLeaveType } from '../Models/view-leave-type.model';
import { NgControlStatusGroup } from '@angular/forms';
import { Status } from '../Models/status.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private dataSource = new Subject<Department>();
  private msgDataSource = new Subject<string>();
  private leaveTypeDataSource = new Subject<ViewLeaveType>();
  private statusDtaSource = new Subject<Status>();

  dataSourceDeparment = this.dataSource.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();
  leaveTypeDataSource$ = this.leaveTypeDataSource.asObservable();
  statusDataSource$ =this.statusDtaSource.asObservable();

  sendDepartment(department: Department) {
    this.dataSource.next(department);
  }

  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendLeaveType(leaveType: ViewLeaveType) {
    this.leaveTypeDataSource.next(leaveType);
  }
  sentStatus(status:Status){
    this.statusDtaSource.next(status);
  }
}
