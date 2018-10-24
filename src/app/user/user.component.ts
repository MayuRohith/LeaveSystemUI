import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRole: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      this.userRole = data.userRole;
    });
  }

}
