import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentDetailsApiInterface,DepartmentService } from '../../department.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  departmentFormEditId!:number;
  departmentDetail!:DepartmentDetailsApiInterface;
  constructor(private departmentService:DepartmentService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentFormEditId = parseInt(id);
      this.departmentService.fetchDepartments(this.departmentFormEditId).subscribe((data:DepartmentDetailsApiInterface[])=>{
        if (data[0]) {
          this.departmentDetail = data[0];
        }
      })

    } else {
      this.router.navigateByUrl('page-not-found');
    }
  }

}
