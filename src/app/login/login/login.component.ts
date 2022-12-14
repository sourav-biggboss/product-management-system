import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  LoginFormBtnStr = 'SignIn';

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }

  constructor(
               private authService: AuthService, 
               private router: Router) {


  }

  login() {
      const val = this.loginForm.value;
      
      if (val.email && val.password) {
        this.LoginFormBtnStr = 'Please Wait..';
          this.authService.login(val.email, val.password)
              .subscribe(
                  () => {
                      this.FormErr = false;
                      this.router.navigateByUrl('/');
                  },
                  (err) => {
                    
                    this.LoginFormBtnStr = 'SignIn';
                    this.FormErrMessage = err.error;
                    if(err.error.message === undefined){
                      this.FormErr = true;
                    }
                  },
                  () => {
                    this.LoginFormBtnStr = 'SignIn';
                  }
              );
      }
  }

}
