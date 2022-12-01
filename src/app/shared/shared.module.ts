import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLayoutComponent } from "./module-layout/module-layout.component";
import { PleaseWaitComponent } from './please-wait/please-wait.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';


@NgModule({
  declarations: [
    ModuleLayoutComponent,
    PleaseWaitComponent,
    AdvanceSearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleLayoutComponent,
    PleaseWaitComponent,
    AdvanceSearchComponent
  ]
})
export class SharedModule { }
