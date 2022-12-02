import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModelComponent } from './popup-model.component';

describe('PopupModelComponent', () => {
  let component: PopupModelComponent;
  let fixture: ComponentFixture<PopupModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
