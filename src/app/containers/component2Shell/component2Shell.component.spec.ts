import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2ShellComponent } from './component2Shell.component';

describe('Component2Component', () => {
    let component: Component2ShellComponent;
    let fixture: ComponentFixture<Component2ShellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ Component2ShellComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Component2ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
