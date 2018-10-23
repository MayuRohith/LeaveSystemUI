import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { Subject } from 'rxjs';
import { ViewLeaveType } from '../Models/view-leave-type.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private dataSource=new Subject<Department>();
  private msgDataSource=new Subject<string>();
  private leaveTypeDataSource = new Subject<ViewLeaveType>();
  
  dataSourceDeparment=this.dataSource.asObservable();
  msgDataSource$=this.msgDataSource.asObservable();
  leaveTypeDataSource$=this.leaveTypeDataSource.asObservable();

  // dataSourceDeparment = this.dataSource.asObservable();
  // msgDataSource$ = this.msgDataSource.asObservable();
  // leaveTypeDataSource$ = this.leaveTypeDataSource.asObservable();

  sendDepartment(department: Department) {
    this.dataSource.next(department);
  }

  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendLeaveType(leaveType: ViewLeaveType){
    this.leaveTypeDataSource.next(leaveType);
  }
}
