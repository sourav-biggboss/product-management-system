import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'',component:ProfileComponent}
    ]),
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
