import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user';
import { RoleService } from 'src/app/services/role.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Role } from 'src/app/Models/role.model';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userObj = new User();

  roles: Role[];
  departments: Department[];

  constructor(private userService: UserService, private roleService: RoleService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getRoles();
    this.getDepartments();
  }

  addUserForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    roleId: new FormControl(''),
    departmentId: new FormControl(''),
    joinDate: new FormControl('')
  });

  onSubmit() {

    var joinDate = new Date(this.addUserForm.value.joinDate);
    var currentDate = new Date();
    

    var leaveDays = (currentDate.getDate() - joinDate.getDate())+1;
    // var days = leaveDays / (1000 * 60 * 60 * 24) + 1;

    console.log(leaveDays);
    this.userObj.servicePeriod = leaveDays;

    this.userObj.userName = this.addUserForm.value.userName;
    this.userObj.email = this.addUserForm.value.email;
    this.userObj.password = this.addUserForm.value.password;
    this.userObj.firstName = this.addUserForm.value.firstName;
    this.userObj.lastName = this.addUserForm.value.lastName;
    this.userObj.roleId = this.addUserForm.value.roleId;
    this.userObj.departmentId = this.addUserForm.value.departmentId;
    this.userObj.joinDate = new Date(this.addUserForm.value.joinDate);

    console.log(this.userObj);

    this.userService.createUser(this.userObj).subscribe(data => {
      console.log("new user create successfully");
    });
  }

  getRoles(){
    this.roleService.getAllRoles().subscribe(data=>{
      this.roles=data;
    })
  }

  getDepartments(){
    this.departmentService.getDepartment().subscribe(data=>{
      this.departments=data;
    })
  }


}
