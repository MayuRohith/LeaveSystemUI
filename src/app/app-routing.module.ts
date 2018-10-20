import { ReqLeaveComponent } from './Components/req-leave/req-leave.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'leaverequest', component: ReqLeaveComponent}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
                              UserComponent,
                              ReqLeaveComponent];
