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
    {path:'',redirectTo:'dashboad',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
