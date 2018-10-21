import { AddUserComponent } from './Components/add-user/add-user.component';
import { AddRoleComponent } from './Components/add-role/add-role.component';
import { AddHolidayComponent } from './Components/add-holiday/add-holiday.component';
import { AddStatusComponent } from './Components/add-status/add-status.component';
import { AddLeaveTypeComponent } from './Components/add-leave-type/add-leave-type.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';
import { LoginComponent } from './login/login.component';
import { ReqLeaveComponent } from './Components/req-leave/req-leave.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PrevilageComponent } from './Components/previlage/previlage.component';
import { ViewRoleComponent } from './Components/view-role/view-role.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'previlage', component: PrevilageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'department', component: AddDepartmentComponent},
  {path: 'leavetype', component: AddLeaveTypeComponent},
  {path: 'status', component: AddStatusComponent},
  {path: 'holiday', component: AddHolidayComponent},
  {path: 'enrole', component: AddUserComponent},
  {path: 'role', component: AddRoleComponent},
  {path: '**', redirectTo: 'login'}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
                              UserComponent,
                              ReqLeaveComponent,
                              ViewRoleComponent];
