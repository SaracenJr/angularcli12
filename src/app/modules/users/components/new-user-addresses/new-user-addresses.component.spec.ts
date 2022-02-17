import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserAddressesComponent } from './new-user-addresses.component';

describe('NewUserAddressesComponent', () => {
  let component: NewUserAddressesComponent;
  let fixture: ComponentFixture<NewUserAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
