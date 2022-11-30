import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { ModuleLayoutComponent } from '../module-layout/module-layout.component';



@NgModule({
  declarations: [
    // ModuleLayoutComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    // DashboadModule,
    // ProfileModule
  ],
  exports: [
    // ModuleLayoutComponent,
  ]
})
export class PanelModule { }
