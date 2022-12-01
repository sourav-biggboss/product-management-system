import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-please-wait',
  templateUrl: './please-wait.component.html',
  styleUrls: ['./please-wait.component.css']
})
export class PleaseWaitComponent implements OnInit {
  title = 'Please Wait'
  constructor() { }

  ngOnInit(): void {
  }

}
