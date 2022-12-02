import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLayoutComponent } from "./module-layout/module-layout.component";
import { PleaseWaitComponent } from './please-wait/please-wait.component';
import { PopupModelComponent } from './popup-model/popup-model.component';


@NgModule({
  declarations: [
    ModuleLayoutComponent,
    PleaseWaitComponent,
    PopupModelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleLayoutComponent,
    PleaseWaitComponent,
    PopupModelComponent
  ]
})
export class SharedModule { }
