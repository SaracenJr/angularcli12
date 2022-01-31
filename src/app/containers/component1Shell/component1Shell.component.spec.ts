import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1ShellComponent } from './component1Shell.component';

describe('Component1Component', () => {
    let component: Component1ShellComponent;
    let fixture: ComponentFixture<Component1ShellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ Component1ShellComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Component1ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
