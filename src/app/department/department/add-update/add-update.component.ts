import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/toast-inline/toast.service';
import { DepartmentDetailsApiInterface, DepartmentService } from '../../department.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  componentScreenType:TemplateScreenAvble = TemplateScreenAvble.add;
  departmentFormEditId!:number;
  FormErr:boolean = false;
  FormErrMessage:any = undefined;
  departmentForm = this.form.group({
    name : ['',[Validators.required,Validators.maxLength(225)]],
    description : ['',[Validators.maxLength(225)]],
  });


  constructor(private form:FormBuilder,private departmentService:DepartmentService,private toastService:ToastService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.warn('Somthing wroung',this.route.snapshot.paramMap.get('id'));
    const screen = this.route.snapshot.paramMap.get('screen');
    const id = this.route.snapshot.paramMap.get('id');
    if (screen == 'add') {
      this.componentScreenType = TemplateScreenAvble.add;
    } else if(screen == 'edit'){
      if (id) {
        this.departmentFormEditId = parseInt(id);
        this.departmentService.fetchDepartments(this.departmentFormEditId).subscribe((data:DepartmentDetailsApiInterface[])=>{
          if (data[0]) {
            console.log(data[0]);
            
            this.departmentForm.setValue({
              name: data[0].name,
              description: data[0].description
            });
          }
        })

      } else {
        this.router.navigateByUrl('page-not-found');
      }
      this.componentScreenType = TemplateScreenAvble.edit;
    }
     else {
      this.router.navigateByUrl('page-not-found');
    }
  }

  onSubmitDetails(){
    if(this.departmentFormEditId){
      this.departmentService.updateDepartment(this.departmentForm.value,this.departmentFormEditId).subscribe();
    }
    else if (this.departmentForm.value) {
      this.departmentService.addDepartment({name : this.departmentForm.value.name,description:this.departmentForm.value.description}).subscribe();
    } else {
      this.toastService.showDanger('Unable to Update/Add');
    }
  }

}

export enum TemplateScreenAvble {add,edit}

