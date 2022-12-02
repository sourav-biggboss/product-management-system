import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddUpdateComponent } from './user-add-update.component';

describe('UserAddUpdateComponent', () => {
  let component: UserAddUpdateComponent;
  let fixture: ComponentFixture<UserAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
