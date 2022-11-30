import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddUpdateComponent } from './department/add-update/add-update.component';
import { ListComponent } from './department/list/list.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PleaseWaitComponent } from '../please-wait/please-wait.component';
import { ModuleLayoutComponent } from '../module-layout/module-layout.component';


@NgModule({
  declarations: [
    PleaseWaitComponent,
    ListComponent,
    AddUpdateComponent,
    DepartmentComponent,
    ModuleLayoutComponent,
  ],
  imports: [
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
  ],
  exports:[
    // ModuleLayoutComponent
  ]
})
export class DepartmentModule { }
