import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
// import { ModuleLayoutComponent } from '../module-layout/module-layout.component';



@NgModule({
  declarations: [
    ProfileComponent,
    // ModuleLayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'',component:ProfileComponent}
    ]),
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    // ModuleLayoutComponent
  ]
})
export class ProfileModule { }
