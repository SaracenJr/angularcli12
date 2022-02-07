import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleShellComponent } from './new-vehicle-shell.component';

describe('NewVehicleShellComponent', () => {
  let component: NewVehicleShellComponent;
  let fixture: ComponentFixture<NewVehicleShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVehicleShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehicleShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
