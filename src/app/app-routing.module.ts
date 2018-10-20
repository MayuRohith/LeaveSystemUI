import { AdminComponent } from './admin/admin.component';
import { ReqLeaveComponent } from './Components/req-leave/req-leave.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PrevilageComponent } from './Components/previlage/previlage.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'leaverequest', component: ReqLeaveComponent},
  {path: 'previlage', component: PrevilageComponent},
  {path: 'admin', component: AdminComponent}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
                              UserComponent,
                              ReqLeaveComponent];
