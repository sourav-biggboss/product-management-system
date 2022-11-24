import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast-inline/toast.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  constructor(private toastService:ToastService) { }

  ngOnInit(): void {
    this.toastService.show('Welcome, This is Development Environment 😀');
  }

}
