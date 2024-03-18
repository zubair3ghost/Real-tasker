import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });
open: boolean=true;

  userlogin() {
    console.log(this.loginForm.value, 'this is the login form values');
  }


  get user(){
    return this.loginForm.get("user")
  }
  
  get  password(){
    return this.loginForm.get("password")
  }

}
