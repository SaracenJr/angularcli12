import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserShellComponent } from './info-user-shell.component';

describe('InfoUserShellComponent', () => {
  let component: InfoUserShellComponent;
  let fixture: ComponentFixture<InfoUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
