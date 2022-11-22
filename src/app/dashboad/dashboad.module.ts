import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboadComponent } from './dashboad.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboadComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'',component:DashboadComponent},
    ]),
    CommonModule
  ]
})
export class DashboadModule { }
