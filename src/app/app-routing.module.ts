import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'', redirectTo:'auth',pathMatch:'full'},
  /* This is a wildcard route. It will match any route that is not matched by the other routes. */
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
