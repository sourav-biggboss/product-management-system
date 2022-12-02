import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigApiService } from 'src/app/config/config-api.service';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { DepartmentDetailsApiInterface, DepartmentService } from '../../department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  departments:DepartmentDetailsApiInterface[] = [];
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  listCount:number = 0;
  paginationPage:number = 1;
  pageSize:number = 30;

  filter = this.formBulider.group({
    orderBy:['desc',[Validators.required,Validators.maxLength(5),Validators.minLength(2)]],
    fromDate:[''],
    toDate:[''],
    withTrash:[null],
    search :[null]
  });

  advanceSearch:boolean = false;
  constructor(private toastService: ToastService,private departmentService:DepartmentService,private router:Router,private configApiService:ConfigApiService,private formBulider:FormBuilder) { }

  ngOnInit(): void {

    this.onFetchData();
    this.getCountList();
  }
  onToggleAdvanceSearch(){
    this.advanceSearch = !this.advanceSearch;
  }  
  getCountList(){
    this.configApiService.commonApiCount('departments').subscribe((data)=>{
      this.listCount = data.count;
    });
  }
  onSearch(){
    this.departments = [];
    this.onFetchData();
    this.getCountList();
  }

  onFetchData(event:number = 1){
    // set page limit
    const offset = this.pageSize * (event - 1);
    const limit = this.pageSize;
    
    this.departmentService.fetchDepartments(undefined,offset,limit,this.filter.value).subscribe((data:DepartmentDetailsApiInterface[])=>{
      this.FormErr = false;
      this.departments = this.departments.concat(data);
    },(err)=>{
      this.FormErrMessage = err.error;
      this.FormErr = true;
    })
  }

  onDelete(id:number){
    this.departmentService.deleteDepartment(id).subscribe();
  }

  onUpdateView(id:number){
    this.router.navigate(['/panel/department/add-update/edit',id]);
  }
  onFindView(id:number){
    this.router.navigate(['/panel/department/view',id]);
  }

}
