import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideNavComponent } from './Shared/side-nav/side-nav.component';
import { TopNavComponent } from './Shared/top-nav/top-nav.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { LeaveHistoryComponent } from './Components/leave-history/leave-history.component';
import { RemainLeaveComponent } from './Components/remain-leave/remain-leave.component';
import { CarryForwardComponent } from './Components/carry-forward/carry-forward.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './Shared/calendar/calendar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { PendingReqComponent } from './Components/pending-req/pending-req.component';
import { ReqHistoryComponent } from './Components/req-history/req-history.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { PrevilageComponent } from './Components/previlage/previlage.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    LeaveHistoryComponent,
    RemainLeaveComponent,
    CarryForwardComponent,
    LoginComponent,
    CalendarComponent,
    FooterComponent,
    PendingReqComponent,
    ReqHistoryComponent,
    AddUserComponent,
    UserProfileComponent,
    RoutingComponents,
    PrevilageComponent, //This array has routed components, so the imports are in the app-routing.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
