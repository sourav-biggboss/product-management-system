import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './department/add-update/add-update.component';
import { ListComponent } from './department/list/list.component';
import { DepartmentComponent } from './department/department.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    AddUpdateComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'',component:DepartmentComponent,children:[
        {path:'add-update/:screen',component:AddUpdateComponent},
        {path:'add-update/:screen/:id',component:AddUpdateComponent},
        {path:'list',component:ListComponent},
        {path:'',redirectTo:'add',pathMatch:'full'},
      ]},
    ]),
  ]
})
export class DepartmentModule { }
