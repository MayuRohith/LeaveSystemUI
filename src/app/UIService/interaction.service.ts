import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { Subject, BehaviorSubject } from 'rxjs';
import { ViewLeaveType } from '../Models/view-leave-type.model';
import { Role } from '../Models/role.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private dataSource=new Subject<Department>();
  private msgDataSource=new BehaviorSubject<string>(null);
  private leaveTypeDataSource = new Subject<ViewLeaveType>();
  private roleDataSource = new Subject<Role>();

  dataSourceDeparment = this.dataSource.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();
  leaveTypeDataSource$ = this.leaveTypeDataSource.asObservable();
  roleDataSource$ = this.roleDataSource.asObservable();

  sendDepartment(department: Department) {
    this.dataSource.next(department);
  }

  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendLeaveType(leaveType: ViewLeaveType) {
    this.leaveTypeDataSource.next(leaveType);
  }

  sendRole(role: Role) {
    this.roleDataSource.next(role);
  }
}
