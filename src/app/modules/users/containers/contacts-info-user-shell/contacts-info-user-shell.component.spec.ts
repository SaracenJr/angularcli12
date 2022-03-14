import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsInfoUserShellComponent } from './contacts-info-user-shell.component';

describe('ContactsInfoUserShellComponent', () => {
  let component: ContactsInfoUserShellComponent;
  let fixture: ComponentFixture<ContactsInfoUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsInfoUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsInfoUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
