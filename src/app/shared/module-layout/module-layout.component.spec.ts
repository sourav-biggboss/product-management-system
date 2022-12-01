import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLayoutComponent } from './module-layout.component';

describe('ModuleLayoutComponent', () => {
  let component: ModuleLayoutComponent;
  let fixture: ComponentFixture<ModuleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
