import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  public paginationPage:number = 1;
  pageSize:number = 30;
   

  constructor(private toastService: ToastService,private departmentService:DepartmentService,private router:Router,private configApiService:ConfigApiService) { }

  ngOnInit(): void {
    this.onFetchData();
    this.configApiService.commonApi<{total:number}>('count','departments').subscribe((data)=>{
      this.listCount = data.total;
    });
  }

  onFetchData(event:number = 1){
    // set page limit
    const offset = this.pageSize * (event - 1);
    const limit = this.pageSize;

    this.departmentService.fetchDepartments(undefined,offset,limit).subscribe((data:DepartmentDetailsApiInterface[])=>{
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

}
