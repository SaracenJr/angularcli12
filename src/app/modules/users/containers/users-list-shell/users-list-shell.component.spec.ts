import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListShellComponent } from './users-list-shell.component';

describe('UsersListShellComponent', () => {
  let component: UsersListShellComponent;
  let fixture: ComponentFixture<UsersListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
