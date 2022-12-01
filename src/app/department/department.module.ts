import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './department/add-update/add-update.component';
import { ListComponent } from './department/list/list.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    AddUpdateComponent,
    DepartmentComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
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
