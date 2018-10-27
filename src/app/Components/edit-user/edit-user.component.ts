import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InteractionService } from '../../UIService/interaction.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { Role } from '../../Models/role.model';
import { Department } from '../../Models/department';
import { RoleService } from '../../services/role.service';
import { DepartmentService } from '../../services/department.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userObj = new User();
  roleObj = new Role();
  roles: Role[];
  departments: Department[];
  constructor(private interactionService: InteractionService,
    private userService: UserService,
    private roleService: RoleService,
    private departmentService: DepartmentService,
    private datepipe: DatePipe) { }

  editUserForm = new FormGroup({
    userId: new FormControl(''),
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
    this.getRecord();
    this.updateUser();
  }
  public getRecord() {
    this.interactionService.userDataSource$.subscribe(data => {
      console.log(data);
      this.userObj = Object.assign({}, data);

      var getJoinDate = new Date(data.joinDate);

      // var joinDatex = getJoinDate.getFullYear() + '-' + getJoinDate.getMonth() + '-' + getJoinDate.getDate();

      var joinDate = this.datepipe.transform(getJoinDate, 'yyyy-MM-dd');

      this.editUserForm.patchValue({ userId: this.userObj.id });
      this.editUserForm.patchValue({ userName: this.userObj.userName });
      this.editUserForm.patchValue({ email: this.userObj.email });
      this.editUserForm.patchValue({ firstName: this.userObj.firstName });
      this.editUserForm.patchValue({ lastName: this.userObj.lastName });
      this.editUserForm.patchValue({ roleId: this.userObj.roleId.id });
      this.editUserForm.patchValue({ departmentId: this.userObj.departmentId.id });
      this.editUserForm.patchValue({ joinDate: joinDate });
    });
  }
  updateUser() {
    return this.userService.updateUser(this.userObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg('success');
    });
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
