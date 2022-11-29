import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  departmentForm = this.form.group({
    name : ['',[Validators.required,Validators.maxLength(225)]]
  });


  constructor(private form:FormBuilder,private departmentService:DepartmentService,private toastService:ToastService) { }

  ngOnInit(): void {
  }

  onSubmitDetails(){
    if (this.departmentForm.value) {
      this.departmentService.addDepartment({name : this.departmentForm.value.name}).subscribe();
    }
  }

}
