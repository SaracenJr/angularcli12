import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBackTablesComponent } from './users-back-tables.component';

describe('UsersBackTablesComponent', () => {
  let component: UsersBackTablesComponent;
  let fixture: ComponentFixture<UsersBackTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBackTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBackTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
