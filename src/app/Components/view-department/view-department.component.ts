import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../Models/department';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  departments: Department[];
  departmentObj = new Department();

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.viewDepartment();
  }

  viewDepartment() {
    return this.departmentService.getDepartment().subscribe(data => {
      this.departments = data;
      console.log(data);
    });
  }

  updateDepartment() {
    return this.departmentService.updateDepartment(this.departmentObj).subscribe(data => {
      console.log(data);
    });
  }

  getDepartmentById(department) {
    this.departmentObj = department;
  }

  createDepartment() {
    return this.departmentService.addDepartment(this.departmentObj).subscribe(data =>{
      console.log(this.departmentObj);
    });
  }
}
