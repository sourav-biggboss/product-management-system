import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseWaitComponent } from './please-wait.component';

describe('PleaseWaitComponent', () => {
  let component: PleaseWaitComponent;
  let fixture: ComponentFixture<PleaseWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseWaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
