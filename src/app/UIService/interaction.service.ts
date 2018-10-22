import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private dataSource=new Subject<Department>();
  private msgDataSource=new Subject<string>();
  
  dataSourceDeparment=this.dataSource.asObservable();
  msgDataSource$=this.msgDataSource.asObservable();

  sendDepartment(department:Department){
    this.dataSource.next(department);
  }

  upadateMsg(msg:string){
    this.msgDataSource.next(msg);
  }
}
