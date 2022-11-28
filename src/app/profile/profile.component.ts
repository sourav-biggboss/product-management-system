import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../toast-inline/toast.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  userDetails!:FormGroup<any>;

  constructor(private form:FormBuilder,private profileService:ProfileService,private toastService:ToastService) { }

  ngOnInit(): void {
    this.profileService.fetchEmp().subscribe((data:UserDetailsApiInterface)=>{
      this.FormErr = false;
      this.userDetails = this.form.group({
        name : [data.name,[Validators.required,Validators.maxLength(225)]],
        email : [data.email,[Validators.required,Validators.email,Validators.max(225)]],
        roll : [data.roll,[Validators.max(225)]],
        photo : [null],
        cv : [null],
        address : [data.address],
        password : [null],
        number : [data.number,Validators.required],
        department_id : [data.department_id,Validators.required],
        salary : [data.salary,Validators.required],
      });
    },(err)=>{
      this.FormErrMessage = err.error;
      this.FormErr = true;
    })

  }

  onSubmitDetails(){
    if (this.userDetails) {
      this.profileService.updateUser(this.userDetails.value).subscribe();
    }
  }

  onDelete(){
    if (this.userDetails) {
      this.profileService.deleteUser().subscribe();
    }
  }
}

export interface UserDetailsFormInterface {
  name:string,
  photo?:File,
  roll?:string,
  email:string,
  password:string,
  cv?:File,
  number:number,
  department_id:number,
  salary:number,
}
export interface UserDetailsApiInterface {
  name:string | null,
  photo_path:string | null,
  roll:string | null,
  email:string | null,
  password:string | null,
  cv_path:string | null,
  document_path:string | null,
  number:number | null,
  department_id:number | null,
  salary:number | null,
  address:string | null
}
