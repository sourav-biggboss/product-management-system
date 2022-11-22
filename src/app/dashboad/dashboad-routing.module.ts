import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboadComponent } from './dashboad.component';

const routes: Routes = [{path:'',component:DashboadComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboadRoutingModule { }
