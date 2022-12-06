import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigApiService } from 'src/app/config/config-api.service';
import { DepartmentDetailsApiInterface, DepartmentService } from 'src/app/department/department.service';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { UserDetailsApiInterface, UserService } from "../user.service";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:UserDetailsApiInterface[] = [];
  departments:DepartmentDetailsApiInterface[] = [];
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  listCount:number = 0;
  paginationPage:number = 1;
  pageSize:number = 30;
  advanceSearch:boolean = false;
  filter = this.formBulider.group({
    orderBy:['desc',[Validators.required,Validators.maxLength(5),Validators.minLength(2)]],
    fromDate:[''],
    toDate:[''],
    withTrash:[null],
    search :[null],
    department_id:[null]
  });

  constructor(private toastService: ToastService,private userService:UserService,private router:Router,private configApiService:ConfigApiService,private formBulider:FormBuilder,private departmentService:DepartmentService) { }
  ngOnInit(): void {

    this.onFetchData();
    this.getCountList();
    this.departmentService.fetchDepartments().subscribe((data:DepartmentDetailsApiInterface[])=>{
      this.departments = data;
    });
  }
  onToggleAdvanceSearch(){
    this.advanceSearch = !this.advanceSearch;
  }  
  getCountList(){
    this.configApiService.commonApiCount('users').subscribe((data)=>{
      this.listCount = data.count;
    });
  }
  onSearch(){
    this.users = [];
    this.onFetchData();
    this.getCountList();
  }

  onFetchData(event:number = 1){
    // set page limit
    const offset = this.pageSize * (event - 1);
    const limit = this.pageSize;
    
    this.userService.fetchUser(undefined,offset,limit,this.filter.value).subscribe((data:UserDetailsApiInterface[])=>{
      this.FormErr = false;
      this.users = this.users.concat(data);
    },(err)=>{
      this.FormErrMessage = err.error;
      this.FormErr = true;
    })
  }

  onDelete(id:number){
    this.userService.deleteUser(id).subscribe();
  }

  onUpdateView(id:number){
    this.router.navigate(['/panel/user/user-add-update/edit',id]);
  }
  onFindView(id:number){
    this.router.navigate(['/panel/user/user-view',id]);
  }
}
