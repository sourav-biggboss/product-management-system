import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddComponent } from './department/add/add.component';
import { ListComponent } from './department/list/list.component';
import { DepartmentComponent } from './department/department.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'',component:DepartmentComponent,children:[
        {path:'add',component:AddComponent},
        {path:'list',component:ListComponent},
        {path:'',redirectTo:'add',pathMatch:'full'},
      ]},
    ]),
  ]
})
export class DepartmentModule { }
