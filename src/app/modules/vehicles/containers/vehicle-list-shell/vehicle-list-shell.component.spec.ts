import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListShellComponent } from './vehicle-list-shell.component';

describe('VehicleListShellComponent', () => {
  let component: VehicleListShellComponent;
  let fixture: ComponentFixture<VehicleListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
