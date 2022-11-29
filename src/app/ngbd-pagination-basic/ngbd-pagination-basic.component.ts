import { Component, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-pagination-basic',
	standalone: true,
	imports: [NgbPaginationModule],
  templateUrl: './ngbd-pagination-basic.component.html',
})
export class NgbdPaginationBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
