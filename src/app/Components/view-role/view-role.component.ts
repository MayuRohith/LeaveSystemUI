import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/role.model';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  roles: Role[];
  roleObj = new Role();
  errorMsg: any;
  constructor(private roleService: RoleService) {
  }

  // on time update thats why we use OnInit
  ngOnInit() {
    this.viewRole();
  }

  viewRole() {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }

  getCode(status) {
    // this.errorMsg = status;
    console.log(status);
    if (status === 500) {
      this.errorMsg = 'delete-error';
    }
  }
  deleteRole() {
    console.log('deleteRole method');
    // this.roleService.deleteRole(this.roleObj).subscribe(data => {
    //   // alert('Deleted Success');
    //   this.viewRole();
    // });

    this.roleService.deleteRole(this.roleObj).subscribe(
      (data) => {
        alert('delete success');
      },
      error => this.getCode(error.status)
    );

  }

  getRoleById(role) {
    // console.log("get Role");
    this.roleObj = role;
    console.log(this.roleObj);
  }
}
