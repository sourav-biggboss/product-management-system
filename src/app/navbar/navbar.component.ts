import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isProfilebarOptionToggle:boolean = false;
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  onTogglrProfileBar():void{
    this.isProfilebarOptionToggle = !this.isProfilebarOptionToggle;
  }

  onLogOut():void{
    console.log('LoggOuting');
    this.authService.logout()
  }

}
