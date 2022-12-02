import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddUpdateComponent } from './user-add-update/user-add-update.component';
import { UserComponent } from './user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserAddUpdateComponent,
    UserComponent,
    UserViewComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:UserComponent,children:[
        {path:'user-add-update/:screen',component:UserAddUpdateComponent},
        {path:'user-add-update/:screen/:id',component:UserAddUpdateComponent},
        {path:'user-view/:id',component:UserViewComponent},
        {path:'user-list',component:UserListComponent},
        {path:'',redirectTo:'add',pathMatch:'full'},
      ]},
    ]),
  ]
})
export class UserModule { }
