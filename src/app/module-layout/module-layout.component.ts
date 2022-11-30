import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-layout',
  templateUrl: './module-layout.component.html',
  styleUrls: ['./module-layout.component.css']
})
export class ModuleLayoutComponent implements OnInit {
  @Input() moduleName:string = 'Manage Details';
  @Input() urlPaths:Array<string> = ['Panel']
  constructor() { }

  ngOnInit(): void {
  }

}
