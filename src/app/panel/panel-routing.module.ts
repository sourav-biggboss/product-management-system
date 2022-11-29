import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {path:'',component:PanelComponent,children:[
    {
      path: 'dashboad',
      pathMatch: 'full',
      loadChildren: () => import('../dashboad/dashboad.module').then(m => m.DashboadModule)
    },
    {
      path: 'profile',
      pathMatch: 'full',
      loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'department',
      loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule)
    },
    {path:'',redirectTo:'dashboad',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
