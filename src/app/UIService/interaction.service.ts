import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { Subject, BehaviorSubject } from 'rxjs';
import { ViewLeaveType } from '../Models/view-leave-type.model';
import { NgControlStatusGroup } from '@angular/forms';
import { Status } from '../Models/status.model';
import { Role } from '../Models/role.model';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private dataSource = new Subject<Department>();
  private msgDataSource = new BehaviorSubject<string>(null);
  private leaveTypeDataSource = new Subject<ViewLeaveType>();
  private statusDtaSource = new Subject<Status>();
  private roleDataSource = new Subject<Role>();
  private userDataSource = new Subject<User>();

  dataSourceDeparment = this.dataSource.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();
  leaveTypeDataSource$ = this.leaveTypeDataSource.asObservable();
  statusDataSource$ = this.statusDtaSource.asObservable();
  roleDataSource$ = this.roleDataSource.asObservable();
  userDataSource$ = this.userDataSource.asObservable();

  sendDepartment(department: Department) {
    this.dataSource.next(department);
  }

  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendLeaveType(leaveType: ViewLeaveType) {
    this.leaveTypeDataSource.next(leaveType);
  }
  sentStatus(status: Status) {
    this.statusDtaSource.next(status);
  }
  sendRole(role: Role) {
    this.roleDataSource.next(role);
  }
  sendUser(user: User) {
    this.userDataSource.next(user);
  }

}
