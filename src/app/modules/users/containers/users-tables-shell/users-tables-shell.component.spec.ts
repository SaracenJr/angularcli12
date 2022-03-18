import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTablesShellComponent } from './users-tables-shell.component';

describe('UsersTablesShellComponent', () => {
  let component: UsersTablesShellComponent;
  let fixture: ComponentFixture<UsersTablesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTablesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTablesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
