import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'',component:ProfileComponent}
    ]),
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
