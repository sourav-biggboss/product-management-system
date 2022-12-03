import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentDetailsApiInterface, DepartmentService } from 'src/app/department/department.service';
import { UserDetailsApiInterface } from 'src/app/profile/profile.component';
import { ProfileService } from 'src/app/profile/profile.service';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-update',
  templateUrl: './user-add-update.component.html',
  styleUrls: ['./user-add-update.component.css']
})
export class UserAddUpdateComponent implements OnInit {

  componentScreenType:TemplateScreenAvble = TemplateScreenAvble.add;
  userFormEditId!:number;
  departments:DepartmentDetailsApiInterface[] = [];
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  userDetails:FormGroup<any> = this.form.group({
    name : ['',[Validators.required,Validators.maxLength(225)]],
    email : ['',[Validators.required,Validators.email,Validators.max(225)]],
    roll : ['',[Validators.max(225)]],
    photo : [''],
    cv : [''],
    address : [''],
    password : [''],
    number : ['',Validators.required],
    department_id : ['',Validators.required],
    salary : ['',Validators.required],
  });

  constructor(private form:FormBuilder,private departmentService:DepartmentService,private userService:UserService,private toastService:ToastService,private route: ActivatedRoute,private router:Router,private profileService:ProfileService) { }

  ngOnInit(): void {
    const screen = this.route.snapshot.paramMap.get('screen');
    const id = this.route.snapshot.paramMap.get('id');
    if (screen == 'add') {
      this.componentScreenType = TemplateScreenAvble.add;
    } else if(screen == 'edit'){
      if (id) {
        this.userFormEditId = parseInt(id);
        
        this.profileService.fetchEmp(this.userFormEditId).subscribe((data:UserDetailsApiInterface | undefined)=>{
          if(data){
            this.FormErr = false;
            this.userDetails = this.form.group({
              name : [data.name ?? '',[Validators.required,Validators.maxLength(225)]],
              email : [data.email ?? '',[Validators.required,Validators.email,Validators.max(225)]],
              roll : [data.roll ?? '',[Validators.max(225)]],
              photo : [null],
              cv : [null],
              address : [data.address ?? ''],
              password : [null],
              number : [data.number ?? '',Validators.required],
              department_id : [data.department_id ?? '',Validators.required],
              salary : [data.salary ?? '',Validators.required],
            });
          }
        },(err)=>{
          this.FormErrMessage = err.error;
          this.FormErr = true;
        })

      } else {
        this.router.navigateByUrl('page-not-found');
      }
      this.componentScreenType = TemplateScreenAvble.edit;
    }
     else {
      this.router.navigateByUrl('page-not-found');
    }
    this.departmentService.fetchDepartments().subscribe((data:DepartmentDetailsApiInterface[])=>{
      this.departments = data;
    });
  }

  
  onSubmitDetails(){
    if(this.userFormEditId){
      this.profileService.updateUser(this.userDetails.value,this.userFormEditId).subscribe();
    }
    else if (this.userDetails.value) {
      this.userService.addUser(this.userDetails.value).subscribe()
    } else {
      this.toastService.showDanger('Unable to Update/Add');
    }
  }

}

export enum TemplateScreenAvble {add,edit}
