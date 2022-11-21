import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  LoginFormBtnStr = 'SignUp';

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    number: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    tAndc: new FormControl('',[Validators.required]),
  })
  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp():void{
    const val = this.signupForm.value;
    if (val.name && val.password && val.email && val.number) {
      this.authService.signup(val.name,val.email,val.password,val.number).subscribe(
        () => {
          this.FormErr = false;
            this.router.navigateByUrl('/');
        },
        (err) => {
          this.LoginFormBtnStr = 'SignUp';
          this.FormErrMessage = err.error;
          this.FormErr = true;
        }
      );
    }
  }
    
}
