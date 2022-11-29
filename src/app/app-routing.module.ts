import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'panel',loadChildren:() => import('./panel/panel.module').then(m => m.PanelModule),canActivateChild:[AuthGuard]},
  {path:'',redirectTo:'panel',pathMatch:'full'},
  /* This is a wildcard route. It will match any route that is not matched by the other routes. */
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
