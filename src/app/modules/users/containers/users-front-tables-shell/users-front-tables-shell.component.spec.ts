import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFrontTablesShellComponent } from './users-front-tables-shell.component';

describe('UsersFrontTablesShellComponent', () => {
  let component: UsersFrontTablesShellComponent;
  let fixture: ComponentFixture<UsersFrontTablesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFrontTablesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFrontTablesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
