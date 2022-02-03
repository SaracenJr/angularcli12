import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserShellComponent } from './new-user-shell.component';

describe('NewUserShellComponent', () => {
  let component: NewUserShellComponent;
  let fixture: ComponentFixture<NewUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
