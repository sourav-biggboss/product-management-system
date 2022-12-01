import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLayoutComponent } from "./module-layout/module-layout.component";
import { PleaseWaitComponent } from './please-wait/please-wait.component';


@NgModule({
  declarations: [
    ModuleLayoutComponent,
    PleaseWaitComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleLayoutComponent,
    PleaseWaitComponent,
  ]
})
export class SharedModule { }
