import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboadModule } from '../dashboad/dashboad.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    DashboadModule
  ],
  exports: [
  ]
})
export class PanelModule { }
