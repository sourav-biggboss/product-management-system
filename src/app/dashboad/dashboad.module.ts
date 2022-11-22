import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboadRoutingModule } from './dashboad-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboadRoutingModule,
  ],
  exports: [
  ]
})
export class DashboadModule { }
