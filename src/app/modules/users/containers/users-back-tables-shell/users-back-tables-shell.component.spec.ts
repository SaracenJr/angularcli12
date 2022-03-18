import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBackTablesShellComponent } from './users-back-tables-shell.component';

describe('UsersBackTablesShellComponent', () => {
  let component: UsersBackTablesShellComponent;
  let fixture: ComponentFixture<UsersBackTablesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBackTablesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBackTablesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
