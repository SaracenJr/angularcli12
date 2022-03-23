import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFrontTablesComponent } from './users-front-tables.component';

describe('UsersTablesComponent', () => {
  let component: UsersFrontTablesComponent;
  let fixture: ComponentFixture<UsersFrontTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFrontTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFrontTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
