import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCardComponent } from './component-card.component';

describe('UserCardComponent', () => {
  let component: ComponentCardComponent;
  let fixture: ComponentFixture<ComponentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
