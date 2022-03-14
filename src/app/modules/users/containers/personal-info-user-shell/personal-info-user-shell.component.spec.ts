import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoUserShellComponent } from './personal-info-user-shell.component';

describe('PersonalInfoUserShellComponent', () => {
  let component: PersonalInfoUserShellComponent;
  let fixture: ComponentFixture<PersonalInfoUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
