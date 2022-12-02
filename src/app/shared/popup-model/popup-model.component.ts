import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  styleUrls: ['./popup-model.component.css']
})
export class PopupModelComponent implements OnInit {
  @Input() title:string = 'More Options';
  @Output() onSubmitCallBack = new EventEmitter<unknown>();
  @Output() onSubmitBack = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
