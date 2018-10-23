import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Login } from '../Models/login.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();
  logedUser: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      if(data != null){
        this.router.navigate(["/admin"]);
      }
    });
  }

  getLoginAuth() {
    // alert("login called");
    this.loginService.getLoginAuth(this.login);
   
    // this.loginService.loginCredential$.subscribe(data => {
    //   alert(data);
    // });
  }

}
