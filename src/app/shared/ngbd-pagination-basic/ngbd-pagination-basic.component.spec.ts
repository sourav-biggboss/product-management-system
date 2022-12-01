import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdPaginationBasicComponent } from './ngbd-pagination-basic.component';

describe('NgbdPaginationBasicComponent', () => {
  let component: NgbdPaginationBasicComponent;
  let fixture: ComponentFixture<NgbdPaginationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdPaginationBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdPaginationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
