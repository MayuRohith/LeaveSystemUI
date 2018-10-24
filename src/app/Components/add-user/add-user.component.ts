import { InteractionService } from './../../UIService/interaction.service';
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

  msg = 'fail';

  constructor(private userService: UserService,
    private roleService: RoleService,
    private departmentService: DepartmentService,
    private interactionService: InteractionService) { }

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

  ngOnInit() {
    this.getRoles();
    this.getDepartments();
  }


  onSubmit() {

    const joinDate = new Date(this.addUserForm.value.joinDate);
    const currentDate = new Date();


    const leaveDays = (currentDate.getDate() - joinDate.getDate()) + 1;
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
      console.log('new user create successfully');
      this.msg = 'success';
      this.interactionService.upadateMsg('success');
    });

    if (this.msg === 'fail') {
      this.interactionService.upadateMsg('fail');
    }

  }

  getRoles() {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles = data;
    });
  }

  getDepartments() {
    this.departmentService.getDepartment().subscribe(data => {
      this.departments = data;
    });
  }


}
