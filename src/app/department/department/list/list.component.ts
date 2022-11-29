import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { DepartmentDetailsApiInterface, DepartmentService } from '../../department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  departments!:DepartmentDetailsApiInterface[];
  FormErr:boolean = false;
  FormErrMessage:any = undefined;

  constructor(private toastService: ToastService,private departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.departmentService.fetchDepartments().subscribe((data:DepartmentDetailsApiInterface[])=>{
      this.FormErr = false;
      this.departments = data;
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
