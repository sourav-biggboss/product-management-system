import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsApiInterface, UserService,UserDetailsApiInterfaceWithDepartment } from "../user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  userFormEditId!:number;
  userDetail!:UserDetailsApiInterfaceWithDepartment;

  constructor(private userService:UserService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userFormEditId = parseInt(id);
      this.userService.fetchUserWithDepartment(this.userFormEditId).subscribe((data:UserDetailsApiInterfaceWithDepartment[])=>{
          this.userDetail = data[0];
      })
    } else {
      this.router.navigateByUrl('page-not-found');
    }
  }

}