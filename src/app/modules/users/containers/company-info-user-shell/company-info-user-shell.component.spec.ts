import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoUserShellComponent } from './company-info-user-shell.component';

describe('CompanyInfoUserShellComponent', () => {
  let component: CompanyInfoUserShellComponent;
  let fixture: ComponentFixture<CompanyInfoUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
